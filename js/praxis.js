const FILTER_KRANKHEITSBILDER = 0;
const FILTER_KÖRPERBEREICHE = 1;

var krankheitsbilderCheckboxMap = {},
	körperbereicheCheckboxMap = {},
	nebendiagnosenCheckboxMap = {},
	übungskategorienCheckboxMap = {},
	schwierigkeitsgradeCheckboxMap = {};

function loadFilter( filter ) 
{	
	var parseFunction = function( $xml )
	{
		parseKörperbereiche( $xml );
		parseÜbungskategorien( $xml );
		parseSchwierigkeitsgrade( $xml );
		parseÜbungen( $xml );

		parseWithFilter( filter, $xml );
	}

	var onParsingFinished = function()
	{
		createCheckboxes( $( "#übungskategorien" ), getÜbungskategorien(), übungskategorienCheckboxMap );
		createCheckboxes( $( "#schwierigkeitsgrade" ), getSchwierigkeitsgrade(), schwierigkeitsgradeCheckboxMap );

		createCheckboxesWithFilter( filter );
	};

	parseXmlData( parseFunction, onParsingFinished );
}

function parseWithFilter( filter, $xml )
{
	if( filter == FILTER_KRANKHEITSBILDER )
	{
		parseKrankheitsbilder( $xml );
		parseNebendiagnosen( $xml );
	}
}

function createCheckboxesWithFilter( filter )
{
	if( filter == FILTER_KRANKHEITSBILDER )
	{
		createCheckboxes( $( "#krankheitsbilder" ), getKrankheitsbilder(), krankheitsbilderCheckboxMap );
		createCheckboxes( $( "#nebendiagnosen" ), getNebendiagnosen(), nebendiagnosenCheckboxMap );
	}
	else if( filter == FILTER_KÖRPERBEREICHE )
	{
		createCheckboxes( $( "#körperbereiche" ), getKörperbereiche(), körperbereicheCheckboxMap );
	}
}

function createCheckboxes( $container, items, checkboxMap )
{
	items.forEach( function( item )
	{
		var $checkbox = createCheckbox( item.name )
		$container.append( $checkbox );
		checkboxMap[ item.name ] = $( $checkbox ).getCheckboxes()[ 0 ];
	} );
}

function createCheckbox( label )
{
	var $checkbox = $( "<div></div>" );
	
	$checkbox.addClass( "checkbox" );
	$checkbox.addClass( "diagnose" );
	$checkbox.text( label );

	$checkbox.makeCheckbox();

	return $checkbox;
}

function showÜbungstabelle( filter, sortProperty )
{
	var $übungstabelle = $( "#übungstabelle" ),
		übungen = getÜbungenWithFilter( filter );

	übungen = filterÜbungenBySelectedÜbungskategorien( übungen );
	übungen = filterÜbungenBySelectedSchwierigkeitsgrade( übungen );

	sortÜbungen( übungen, sortProperty );

	createRows( übungen );

	$übungstabelle.removeClass( "invisible" );
	scrollToElement( $übungstabelle );
}

function getÜbungenWithFilter( filter )
{
	var übungen = [];

	if( filter == FILTER_KRANKHEITSBILDER )
	{
		übungen = getÜbungenBySelectedKrankheitsbilder();
		übungen = filterÜbungenBySelectedNebendiagnosen( übungen );
	}
	else if( filter == FILTER_KÖRPERBEREICHE )
	{
		übungen = getÜbungenBySelectedKörperbereiche();
	}

	return übungen;
}

function getÜbungenBySelectedKrankheitsbilder()
{
	var übungenMap = {};

	getKrankheitsbilder().forEach( function( krankheitsbild )
	{
		var krankheitsbildCheckbox = krankheitsbilderCheckboxMap[ krankheitsbild.name ];

		if( krankheitsbildCheckbox.isChecked() )
		{
			krankheitsbild.übungen.forEach( function( übung )
			{
				übungenMap[ übung ] = findÜbungByName( übung );
			} );
		}
	} );

	return mapToArray( übungenMap );
}

function getÜbungenBySelectedKörperbereiche()
{
	var übungen = mapToArray( getÜbungenAsMap() );
	return übungen.filter( function( übung )
	{
		for( var i = 0; i < übung.körperbereiche.length; i++ )
		{
			var körperbereich = übung.körperbereiche[ i ];
			if( körperbereicheCheckboxMap[ körperbereich ].isChecked() )
				return true;
		}
		return false;
	} );
}

function filterÜbungenBySelectedNebendiagnosen( übungen )
{
	var übungsverboteMap = getÜbungsverboteBySelectedNebendiagnosenAsMap();

	return übungen.filter( function( übung )
	{
		return !übungsverboteMap.hasOwnProperty( übung.name );
	} );
}

function getÜbungsverboteBySelectedNebendiagnosenAsMap()
{
	var übungsverboteMap = {};

	getNebendiagnosen().forEach( function( nebendiagnose )
	{
		var nebendiagnoseCheckbox = nebendiagnosenCheckboxMap[ nebendiagnose.name ];

		if( nebendiagnoseCheckbox.isChecked() )
		{
			nebendiagnose.übungsverbote.forEach( function( übungsverbot )
			{
				übungsverboteMap[ übungsverbot ] = übungsverbot;
			} );
		}
	} );

	return übungsverboteMap;
}

function filterÜbungenBySelectedÜbungskategorien( übungen )
{
	return übungen.filter( function( übung )
	{
		return übungskategorienCheckboxMap[ übung.übungskategorie ].isChecked();
	} );
}

function filterÜbungenBySelectedSchwierigkeitsgrade( übungen )
{
	return übungen.filter( function( übung )
	{
		return schwierigkeitsgradeCheckboxMap[ übung.schwierigkeitsgrad ].isChecked();
	} );
}

function sortÜbungen( übungen, sortProperty )
{
	if( sortProperty == "körperbereiche" )
	{
		übungen.sort( function( übung1, übung2 )
		{
			var körperbereicheEnumeration1 = enumerize( übung1.körperbereiche ),
				körperbereicheEnumeration2 = enumerize( übung2.körperbereiche );
				
			if( körperbereicheEnumeration1 < körperbereicheEnumeration2 ) return -1;
			else if( körperbereicheEnumeration2 < körperbereicheEnumeration1 ) return 1;
			else return 0; 
		} );
	}
	else if( sortProperty == "name"
		|| sortProperty == "übungskategorie"
		|| sortProperty == "schwierigkeitsgrad" )
		 sortByProperty( übungen, sortProperty );
}

function createRows( übungen )
{
	var $body = $( "#übungstabelle-body" );

	$body.empty();

	übungen.forEach( function( übung )
	{
		$body.append( createRow( übung ) );
	} );
}

function createRow( übung )
{
	var $row = $( "<tr></tr>" ),
		$colName = $( "<td></td>" ),
		$colKörperbereich = $( "<td></td>" ),
		$colÜbungskategorie = $( "<td></td>" ),
		$colSchwierigkeitsgrad = $( "<td></td>" );

	$colName.text( übung.name );
	$row.append( $colName );

	$colKörperbereich.text( enumerize( übung.körperbereiche ) );
	$row.append( $colKörperbereich );

	$colÜbungskategorie.text( übung.übungskategorie );
	$row.append( $colÜbungskategorie );

	$colSchwierigkeitsgrad.text( übung.schwierigkeitsgrad );
	$row.append( $colSchwierigkeitsgrad );

	$row.data( "link", "Übungen/Seiten/" + übung.name + ".html" );

	$row.click( function() 
	{
		openLink( $( this ).data( "link" ) );
	} );

	return $row;
}