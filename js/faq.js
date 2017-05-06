var faqThemen = [],
	counter = 0;

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
		parseFAQThemen( $xml );
	};

	var onParsingFinished = function()
	{
		createFAQThemen();
	};

	parseXmlData( parseFunction, onParsingFinished );
}

function createFAQThemen()
{
	var $faq = $( "#faq" ),
		i = 0;

	faqThemen.forEach( function( faqThema )
	{
		var backgroundTransparent = (i % 2 == 0);
		$faq.append( createFAQThema( faqThema, backgroundTransparent ) );
		i++;
	} );
}

function createFAQThema( faqThema, backgroundTransparent )
{
	var $themaSection = $( "<section></section>" ),
		$themaContainer = $( "<div></div>" ),
		$themaHeadline = $( "<h3></h3>" ),
		$einträge = $( "<ol></ol>" );

	$themaSection.addClass( "basic-container" );
	if( backgroundTransparent )
		$themaSection.addClass( "background-transparent" );
	else
		$themaSection.addClass( "background-default" );

	$themaContainer.addClass( "basic-container" );
	$themaContainer.addClass( "faq-thema-container" );

	$themaHeadline.addClass( "faq-thema-headline" );
	$themaHeadline.text( faqThema.name );

	faqThema.einträge.forEach( function( faqEintrag )
	{
		$einträge.append( createFAQEintrag( faqEintrag ) );
	} );

	$themaContainer.append( $themaHeadline );
	$themaContainer.append( $einträge );
	$themaSection.append( $themaContainer );

	return $themaSection;
}

function createFAQEintrag( faqEintrag )
{
	var $eintrag = $( "<li></li>" ),
		$frage = $( "<p></p>" ),
		$antwort = $( "<p></p>" ),
		$antwortHighlight = $( "<span></span>" );
		$antwortText = $( "<span></span>" );

	$eintrag.addClass( "faq-eintrag" );
	$eintrag.addClass( "background-transparent-hover" );
	$eintrag.data( "antwort", $antwort );
	$eintrag.click( function()
	{
		$( this ).data( "antwort" ).slideToggle( 'medium' );
	} );

	$frage.addClass( "faq-frage" );
	$frage.text( faqEintrag.frage );

	$antwort.addClass( "faq-antwort" );

	$antwortHighlight.addClass( "faq-antwort-highlight" );
	$antwortHighlight.text( "Antwort: " );
	$antwort.append( $antwortHighlight );

	$antwortText.text( faqEintrag.antwort );
	$antwort.append( $antwortText );
	$antwort.css( { "display" : "none" } );

	$eintrag.append( $frage );
	$eintrag.append( $antwort );

	return $eintrag;
}