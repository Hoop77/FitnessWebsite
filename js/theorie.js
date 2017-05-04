var krankheitsbilder = [],
	trainingshinweise = [];

function Krankheitsbild( name )
{
	this.name = name;
}

function Trainingshinweis( name )
{
	this.name = name;
}

function parseKrankheitsbilder( $xml )
{
    var $Daten = $( $xml ).find( "Daten" )[ 0 ],
		$Theorie = $( $Daten ).find( "Theorie" )[ 0 ],
        $Krankheitsbilder = $( $Theorie ).find( "Krankheitsbilder" )[ 0 ],
        $KrankheitsbildList = $( $Krankheitsbilder ).find( "Krankheitsbild" );

    $( $KrankheitsbildList ).each( function()
    {
        var $Krankheitsbild = this,
            name = $( $Krankheitsbild ).attr( "Name" );

		krankheitsbilder.push( new Krankheitsbild( name ) );
    } );

    sortByName( krankheitsbilder );
}

function parseTrainingshinweise( $xml )
{
    var $Daten = $( $xml ).find( "Daten" )[ 0 ],
		$Theorie = $( $Daten ).find( "Theorie" )[ 0 ],
        $Trainingshinweise = $( $Theorie ).find( "Trainingshinweise" )[ 0 ],
        $TrainingshinweisList = $( $Trainingshinweise ).find( "Trainingshinweis" );

    $( $TrainingshinweisList ).each( function()
    {
        var $Trainingshinweis = this,
            name = $( $Trainingshinweis ).attr( "Name" );

		trainingshinweise.push( new Trainingshinweis( name ) );
    } );

    sortByName( trainingshinweise );
}

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
			createListItem( krankheitsbild.name, "Krankheitsbilder/Seiten/" + krankheitsbild.name + ".html" )
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