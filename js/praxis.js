const FILTER_KRANKHEITSBILDER = 0;
const FILTER_KÖRPERBEREICHE = 1;

var körperbereiche = [],
	krankheitsbilder = [],
	nebendiagnosen = [];

var übungskategorienMap = {},
	schwierigkeitsgradeMap = {},
	übungenMap = {};

var krankheitsbilderCheckboxMap = {},
	körperbereicheCheckboxMap = {},
	nebendiagnosenCheckboxMap = {},
	übungskategorienCheckboxMap = {},
	schwierigkeitsgradeCheckboxMap = {};

// =========================
// getter
// =========================

function getKörperbereiche()
{
	return körperbereiche;
}

function getÜbungskategorien()
{
	return mapToArray( übungskategorienMap );
}

function getSchwierigkeitsgrade()
{
	return mapToArray( schwierigkeitsgradeMap );
}

function getKrankheitsbilder()
{
	return krankheitsbilder;
}

function getNebendiagnosen()
{
	return nebendiagnosen;
}

function getÜbungen()
{
	return mapToArray( übungenMap );
}

function findÜbungskategorieByName( name )
{
	return übungskategorienMap[ name ];
}

function findSchwierigkeitsgradByName( name )
{
	return schwierigkeitsgradeMap[ name ];
}

function findÜbungByName( name )
{
	return übungenMap[ name ];
}

// =========================
// classes
// =========================

function Körperbereich( name )
{
	this.name = name;
}

function Übungskategorie( name, reihenfolge )
{
	this.name = name;
	this.reihenfolge = reihenfolge;
}

function Schwierigkeitsgrad( name, farbe )
{
	this.name = name;
	this.farbe = farbe;
}

function Krankheitsbild( name, übungen )
{
	this.name = name;
	this.übungen = übungen;
}

function Nebendiagnose( name, übungsverbote )
{
	this.name = name;
	this.übungsverbote = übungsverbote;
}

function Übung( 
	name, 
	übungskategorie, 
	schwierigkeitsgrad, 
	beschreibungStartposition, 
	beschreibungEndposition,
	körperbereiche,
	stichpunkte )
{
	this.name = name;
	this.übungskategorie = übungskategorie;
	this.schwierigkeitsgrad = schwierigkeitsgrad;
	this.beschreibungStartposition = beschreibungEndposition;
	this.beschreibungEndposition = beschreibungEndposition;
	this.körperbereiche = körperbereiche;
	this.stichpunkte = stichpunkte;
}

// =========================
// parsing functions
// =========================

function parseKörperbereiche( $xml )
{
	var $Daten = $( $xml ).find( "Daten" )[ 0 ],
		$Körperbereiche = $( $Daten ).find( "Körperbereiche" )[ 0 ],
		$KörperbereichList = $( $Körperbereiche ).find( "Körperbereich" );

    $( $KörperbereichList ).each( function()
    {
        var $Körperbereich = this;
            name = $( $Körperbereich ).attr( "Name" );

		körperbereiche.push( new Körperbereich( name ) );
    } );
}

function parseÜbungskategorien( $xml )
{
    var $Daten = $( $xml ).find( "Daten" )[ 0 ],
        $Übungskategorien = $( $Daten ).find( "Übungskategorien" )[ 0 ],
        $ÜbungskategorieList = $( $Übungskategorien ).find( "Übungskategorie" );

    $( $ÜbungskategorieList ).each( function()
    {
        var $Übungskategorie = this;
            name = $( $Übungskategorie ).attr( "Name" ),
			reihenfolge = $( $Übungskategorie ).attr( "Reihenfolge" );

		übungskategorienMap[ name ] = new Übungskategorie( name, reihenfolge );
    } );
}

function parseSchwierigkeitsgrade( $xml )
{
    var $Daten = $( $xml ).find( "Daten" )[ 0 ],
        $Schwierigkeitsgrade = $( $Daten ).find( "Schwierigkeitsgrade" )[ 0 ],
        $SchwierigkeitsgradList = $( $Schwierigkeitsgrade ).find( "Schwierigkeitsgrad" );

    $( $SchwierigkeitsgradList ).each( function()
    {
        var $Schwierigkeitsgrad = this,
            name = $( $Schwierigkeitsgrad ).attr( "Name" ),
			farbe = $( $Schwierigkeitsgrad ).attr( "Farbe" );

		schwierigkeitsgradeMap[ name ] = new Schwierigkeitsgrad( name, farbe );
    } );
}

function parseÜbungen( $xml )
{
	var $Daten = $( $xml ).find( "Daten" )[ 0 ],
		$Praxis = $( $xml ).find( "Praxis" )[ 0 ],
        $Übungen = $( $Praxis ).find( "Übungen" )[ 0 ],
        $ÜbungList = $( $Übungen ).find( "Übung" );

    $( $ÜbungList ).each( function()
    {
        var $Übung = this,
            name = $( $Übung ).attr( "Name" ),
			übungskategorie = $( $Übung ).attr( "Übungskategorie" ),
			schwierigkeitsgrad = $( $Übung ).attr( "Schwierigkeitsgrad" ),
			beschreibungStartposition = $( $Übung ).attr( "BeschreibungStartposition" ),
			beschreibungEndposition = $( $Übung ).attr( "BeschreibungEndposition" ),
			körperbereiche = [],
			$KörperbereichList = $( $Übung ).find( "Körperbereich" ),
			stichpunkte = [],
			$StichpunktList = $( $Übung ).find( "Stichpunkt" );

		$( $KörperbereichList ).each( function()
		{
			var $Körperbereich = this,
				körperbereich = $( $Körperbereich ).text();
			körperbereiche.push( körperbereich );
		} );

		$( $StichpunktList ).each( function()
		{
			var $Stichpunkt = this,
				stichpunkt = $( $Stichpunkt ).text();
			stichpunkte.push( stichpunkt );
		} );

		übungenMap[ name ] = new Übung(
			name, 
			übungskategorie, 
			schwierigkeitsgrad, 
			beschreibungStartposition,
			beschreibungEndposition,
			körperbereiche,
			stichpunkte );
    } );
}

function parseKrankheitsbilder( $xml )
{
    var $Daten = $( $xml ).find( "Daten" )[ 0 ],
		$Praxis = $( $xml ).find( "Praxis" )[ 0 ],
        $Krankheitsbilder = $( $Praxis ).find( "Krankheitsbilder" )[ 0 ],
        $KrankheitsbildList = $( $Krankheitsbilder ).find( "Krankheitsbild" );

    $( $KrankheitsbildList ).each( function()
    {
        var $Krankheitsbild = this,
            name = $( $Krankheitsbild ).attr( "Name" ),
			$ÜbungList = $( $Krankheitsbild ).find( "Übung" ),
			übungen = [];

		$( $ÜbungList ).each( function()
		{
			var $Übung = this,
				übung = $( $Übung ).text();
			übungen.push( übung );
		} );

		krankheitsbilder.push( new Krankheitsbild( name, übungen ) );
    } );

    sortByName( krankheitsbilder );
}

function parseNebendiagnosen( $xml )
{
    var $Daten = $( $xml ).find( "Daten" )[ 0 ],
		$Praxis = $( $xml ).find( "Praxis" )[ 0 ],
        $Nebendiagnosen = $( $Praxis ).find( "Nebendiagnosen" )[ 0 ],
        $NebendiagnoseList = $( $Nebendiagnosen ).find( "Nebendiagnose" );

    $( $NebendiagnoseList ).each( function()
    {
        var $Nebendiagnose = this,
            name = $( $Nebendiagnose ).attr( "Name" ),
			$ÜbungsverbotList = $( $Nebendiagnose ).find( "Übungsverbot" ),
			übungsverbote = [];

		$( $ÜbungsverbotList ).each( function()
		{
			var $Übungsverbot = this,
				übungsverbot = $( $Übungsverbot ).text();
			übungsverbote.push( übungsverbot );
		} );

		nebendiagnosen.push( new Nebendiagnose( name, übungsverbote ) );
    } );

    sortByName( nebendiagnosen );
}

function loadFilter( filter ) 
{	
	var parseFunction = function( $xml )
	{
		parseKörperbereiche( $xml );
		parseÜbungskategorien( $xml );
		parseSchwierigkeitsgrade( $xml );
		parseNebendiagnosen( $xml );
		parseÜbungen( $xml );

		parseWithFilter( filter, $xml );
	};

	var onParsingFinished = function()
	{
		createCheckboxes( $( "#übungskategorien" ), getÜbungskategorien(), übungskategorienCheckboxMap );
		createCheckboxes( $( "#schwierigkeitsgrade" ), getSchwierigkeitsgrade(), schwierigkeitsgradeCheckboxMap );
		createCheckboxes( $( "#nebendiagnosen" ), getNebendiagnosen(), nebendiagnosenCheckboxMap );

		createCheckboxesWithFilter( filter );
	};

	parseXmlData( parseFunction, onParsingFinished );
}

function parseWithFilter( filter, $xml )
{
	if( filter == FILTER_KRANKHEITSBILDER )
	{
		parseKrankheitsbilder( $xml );
	}
}

function createCheckboxesWithFilter( filter )
{
	if( filter == FILTER_KRANKHEITSBILDER )
	{
		createCheckboxes( $( "#krankheitsbilder" ), getKrankheitsbilder(), krankheitsbilderCheckboxMap );
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

	übungen = filterÜbungenBySelectedNebendiagnosen( übungen );
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
	var übungen = getÜbungen();
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
	else if( sortProperty == "übungskategorie" )
	{
		übungen.sort( function( übung1, übung2 )
		{
			var reihenfolge1 = findÜbungskategorieByName( übung1.übungskategorie ).reihenfolge,
				reihenfolge2 = findÜbungskategorieByName( übung2.übungskategorie ).reihenfolge;
				
			if( reihenfolge1 < reihenfolge2 ) return -1;
			else if( reihenfolge2 < reihenfolge1 ) return 1;
			else return 0; 
		} );
	}
	else if( sortProperty == "name"
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

	$colÜbungskategorie.text( übung.übungskategorie );
	$row.append( $colÜbungskategorie );

	$colSchwierigkeitsgrad.text( übung.schwierigkeitsgrad );
	$colSchwierigkeitsgrad.css( "color", findSchwierigkeitsgradByName( übung.schwierigkeitsgrad ).farbe );
	$row.append( $colSchwierigkeitsgrad );

	$colKörperbereich.text( enumerize( übung.körperbereiche ) );
	$row.append( $colKörperbereich );

	$colName.text( übung.name );
	$row.append( $colName );

	$row.data( "link", "Übungen/Seiten/" + übung.name + ".html" );

	$row.click( function() 
	{
		openLinkInNewTab( $( this ).data( "link" ) );
	} );

	return $row;
}

function showDetailierteBeschreibung()
{
	var $detailierteBeschreibung = $( '#detailierteBeschreibung' );
	$detailierteBeschreibung.removeClass( "invisible" );
	scrollToElement( $detailierteBeschreibung );
}