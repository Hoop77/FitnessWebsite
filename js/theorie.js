function loadTheorie() 
{
	var parseFunction = function( $xml )
	{
		parseKrankheitsbilder( $xml );
		parseTrainingshinweise( $xml );
	};
	
	var onParsingFinished = function()
	{
		showKrankheitsbilder();
		showTrainingshinweise();
	};

	parseXmlData( parseFunction, onParsingFinished );
}

function showKrankheitsbilder()
{
    var $ulKrankheitsbilder = $( "#ulKrankheitsbilder" );
    krankheitsbilder.forEach( function( krankheitsbild ) 
    {
        $ulKrankheitsbilder.append(
			createListItem( krankheitsbild.name, "Krankheitsbilder/" + krankheitsbild.name + ".pdf" ) 
		);
    } );
}

function showTrainingshinweise()
{
    var $ulTrainingshinweise = $( "#ulTrainingshinweise" );
    trainingshinweise.forEach( function( trainingshinweis ) 
    {
        $ulTrainingshinweise.append( 
			createListItem( trainingshinweis.name, "Trainingshinweise/" + trainingshinweis.name + ".pdf" )
		);
    } );
}

function createListItem( label, link )
{
	var $li = $( "<li></li>" ),
		$a = $( "<a></a>" );

    $li.addClass( "box" );
    $li.addClass( "box-small" );
    $li.addClass( "list-item-no-enum" );
    $li.addClass( "v-gap" );
    $li.addClass( "background-transparent" );
    $li.addClass( "background-transparent-hover" );
    
	$a.addClass( "link" );
	$a.text( label );
	$a.attr( "href", link );
	$a.attr( "target", "_blank" );
	
	$li.append( $a );

    return $li;
}