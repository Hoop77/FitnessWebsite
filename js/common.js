var körperbereiche = [],
	übungskategorien = [],
	krankheitsbilder = [],
	nebendiagnosen = [],
	trainingshinweise = [],
	faqEinträge = [];

var übungenMap = {},
	schwierigkeitsgradeMap = {};

// =========================
// getter
// =========================

function getKörperbereiche()
{
	return körperbereiche;
}

function getÜbungskategorien()
{
	return übungskategorien;
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

function getTrainingshinweise()
{
	return trainingshinweise;
}

function getÜbungen()
{
	return mapToArray( übungenMap );
}

// =========================
// classes
// =========================

function Körperbereich( name )
{
	this.name = name;
}

function Übungskategorie( name )
{
	this.name = name;
}

function Schwierigkeitsgrad( name, farbe )
{
	this.name = name;
	this.farbe = farbe;
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

function Trainingshinweis( name )
{
	this.name = name;
}

function FAQEintrag( frage, antwort )
{
	this.frage = frage;
	this.antwort = antwort;
}

// =========================
// parsing functions
// =========================

function parseXmlData( parseFunction, onParsingFinished )
{
	var $xml = $.parseXML( getXmlData() );
	parseFunction( $xml );
	onParsingFinished();
}

function parseKörperbereiche( $xml )
{
	var $Daten = $( $xml ).find( "Daten" ),
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
    var $Daten = $( $xml ).find( "Daten" ),
        $Übungskategorien = $( $Daten ).find( "Übungskategorien" )[ 0 ],
        $ÜbungskategorieList = $( $Übungskategorien ).find( "Übungskategorie" );

    $( $ÜbungskategorieList ).each( function()
    {
        var $Übungskategorie = this;
            name = $( $Übungskategorie ).attr( "Name" );

		übungskategorien.push( new Übungskategorie( name ) );
    } );
}

function parseSchwierigkeitsgrade( $xml )
{
    var $Daten = $( $xml ).find( "Daten" ),
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
	var $Daten = $( $xml ).find( "Daten" ),
        $Übungen = $( $Daten ).find( "Übungen" )[ 0 ],
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
    var $Daten = $( $xml ).find( "Daten" ),
        $Krankheitsbilder = $( $Daten ).find( "Krankheitsbilder" )[ 0 ],
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
    var $Daten = $( $xml ).find( "Daten" ),
        $Nebendiagnosen = $( $Daten ).find( "Nebendiagnosen" )[ 0 ],
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

function parseTrainingshinweise( $xml )
{
    var $Daten = $( $xml ).find( "Daten" ),
        $Trainingshinweise = $( $Daten ).find( "Trainingshinweise" )[ 0 ],
        $TrainingshinweisList = $( $Trainingshinweise ).find( "Trainingshinweis" );

    $( $TrainingshinweisList ).each( function()
    {
        var $Trainingshinweis = this,
            name = $( $Trainingshinweis ).attr( "Name" );

		trainingshinweise.push( new Trainingshinweis( name ) );
    } );

    sortByName( trainingshinweise );
}

function parseFAQEinträge( $xml )
{
	var $Daten = $( $xml ).find( "Daten" ),
        $FAQ = $( $Daten ).find( "FAQ" )[ 0 ],
        $EintragList = $( $FAQ ).find( "Eintrag" );

    $( $EintragList ).each( function()
    {
        var $Eintrag = this,
            $Frage = $( $Eintrag ).find( "Frage" )[ 0 ],
			frage = $( $Frage ).text(),
			$Antwort = $( $Eintrag ).find( "Antwort" )[ 0 ],
			antwort = $( $Antwort ).text();

		faqEinträge.push( new FAQEintrag( frage, antwort ) );
    } );
}

// =========================
// utility functions
// =========================

function sortByName( arr )
{
    arr.sort( function( el1, el2 ) 
    {
        var name1 = el1.name,
			name2 = el2.name;
            
        if( name1 < name2 ) return -1;
        else if( name2 < name1 ) return 1;
        else return 0;
    } );
}

function sortByProperty( arr, property )
{
	arr.sort( function( el1, el2 ) 
    {
        var val1 = el1[ property ],
			val2 = el2[ property ];
            
        if( val1 < val2 ) return -1;
        else if( val2 < val1 ) return 1;
        else return 0;
    } );
}

function findÜbungByName( name )
{
	return übungenMap[ name ];
}

function findSchwierigkeitsgradByName( name )
{
	return schwierigkeitsgradeMap[ name ];
}

function scrollToElement( el ) 
{
	$( "html, body" ).animate(
		{ scrollTop: $( el ).offset().top }, 
		{ duration : 'slow' }
	);
}

function openLink( link )
{
	window.location.href = link;
}

// seperate string items with comma
function enumerize( items )
{
	var enumeration = "",
		i = items.length - 1;
	
	items.forEach( function( item )
	{
		enumeration += item;
		if( i > 0 ) enumeration += ", ";
		i--;
	} );

	return enumeration;
}

function mapToArray( map )
{
	var arr = [];

	for( var property in map )
		arr.push( map[ property ] );

	return arr;
}

$.fn.hasAttr = function( name )
{
	var attr = $( this ).attr( name );
	if( typeof attr !== typeof undefined && attr !== false )
		return true;

	return false;
}