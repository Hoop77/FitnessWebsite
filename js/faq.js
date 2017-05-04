var faqThemen = [];

function FAQThema( name, einträge )
{
	this.name = name;
	this.einträge = einträge;
}

function FAQEintrag( frage, antwort )
{
	this.frage = frage;
	this.antwort = antwort;
}

function parseFAQThemen( $xml )
{
	var $Daten = $( $xml ).find( "Daten" )[ 0 ],
        $FAQ = $( $Daten ).find( "FAQ" )[ 0 ],
		$ThemaList = $( $FAQ ).find( "Thema" );

	$( $ThemaList ).each( function()
	{
		var $Thema = this,
			name = $( $Thema ).attr( "Name" ),
			$EintragList = $( $Thema ).find( "Eintrag" ),
			einträge = [];

		$( $EintragList ).each( function()
		{
			var $Eintrag = this,
				$Frage = $( $Eintrag ).find( "Frage" )[ 0 ],
				frage = $( $Frage ).text(),
				$Antwort = $( $Eintrag ).find( "Antwort" )[ 0 ],
				antwort = $( $Antwort ).text();

			einträge.push( new FAQEintrag( frage, antwort ) );
		} );

		faqThemen.push( new FAQThema( name, einträge ) );
	} );
}

function loadFAQ()
{	
	var parseFunction = function( $xml )
	{
		parseFAQEinträge( $xml );
	};

	var onParsingFinished = function()
	{
		createFAQEinträge();
	};

	parseXmlData( parseFunction, onParsingFinished );
}

function createFAQEinträge()
{
	var $faq = $( "#faq" ), 
		i = 0;
	
	faqEinträge.forEach( function( faqEintrag )
	{
		var backgroundTransparent = (i % 2 == 0);
		$faq.append( createFAQEintrag( faqEintrag, backgroundTransparent ) );
		i++;
	} );
}

function createFAQEintrag( faqEintrag, backgroundTransparent )
{
	var $faqEintrag = $( "<section></section>" ),
		$container = $( "<div></div>" ),
		$h3Frage = $( "<h3></h3>" ),
		$pFrage = $( "<p></p>" ),
		$h3Antwort = $( "<h3></h3>" ),
		$pAntwort = $( "<p></p>" );
	
	$faqEintrag.addClass( "basic-container" );
	$faqEintrag.addClass( "faq-section" );
	if( backgroundTransparent )
		$faqEintrag.addClass( "background-transparent" );
	else
		$faqEintrag.addClass( "background-default" );

	$container.addClass( "basic-container" );
	$container.addClass( "content-width" );

	$h3Frage.text( "Frage" );
	$pFrage.text( faqEintrag.frage );

	$h3Antwort.text( "Antwort" );
	$pAntwort.text( faqEintrag.antwort );

	$container.append( $h3Frage );
	$container.append( $pFrage );
	$container.append( $h3Antwort );
	$container.append( $pAntwort );

	$faqEintrag.append( $container );

	return $faqEintrag;
}