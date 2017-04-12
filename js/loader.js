$.fn.hasAttr = function( name )
{
	var attr = $( this ).attr( name );
	if( typeof attr !== typeof undefined && attr !== false )
		return true;

	return false;
}

function loadTheorie() 
{
	loadDiagnoses( function( diagnoses)
	{
		setOlDiagnosen( diagnoses );
	} );
}

function setOlDiagnosen( diagnoses )
{
    var $olDiagnosen = $( "#olDiagnosen" );
    diagnoses.forEach( function( diagnose ) 
    {
        $olDiagnosen.append( createLiDiagnose( diagnose ) );
    } );
}

function createLiDiagnose( diagnose ) 
{
    var $liDiagnose = $( "<li></li>" );

    $liDiagnose.addClass( "box" );
    $liDiagnose.addClass( "box-small" );
    $liDiagnose.addClass( "list-item-no-enum" );
    $liDiagnose.addClass( "v-gap" );
    $liDiagnose.addClass( "background-transparent" );
    $liDiagnose.addClass( "background-transparent-hover" );
    $liDiagnose.addClass( "color-transition" );
    $liDiagnose.addClass( "link" );
    $liDiagnose.text( diagnose.name );
    $liDiagnose.data( "diagnose-name", diagnose.name );
    $liDiagnose.click( function() 
    {
        window.location = "Diagnosen/" + $( this ).data( "diagnose-name" ) + ".html";
    } );

    return $liDiagnose;
}

function loadDiagnoses( onLoadFinished )
{
    $.ajax( {
        url: "Daten.xml",
        dataType: "xml",
        success: function( $xml ) 
		{ 
			parseDiagnoses( $xml, onLoadFinished );
		},
        error: function()
		{
			alert( "Error: Diagnosen konnten nicht geladen werden!" );
		}
    } );
}

function parseDiagnoses( $xml, onLoadFinished )
{
    var $Daten = $( $xml ).find( "Daten" ),
        $Diagnosen = $( $Daten ).find( "Diagnosen" )[ 0 ],
        $DiagnoseList = $( $Diagnosen ).find( "Diagnose" ),
		diagnoses = [];

    $( $DiagnoseList ).each( function()
    {
        var $Diagnose = this;
            name = $( $Diagnose ).attr( "Name" ),
			isNebendiagnose = $( $Diagnose ).hasAttr( "Nebendiagnose" );

		diagnoses.push( { 
			name: name,
			isNebendiagnose: isNebendiagnose
		} );
    } );

    sortDiagnosesByName( diagnoses );
	onLoadFinished( diagnoses );
}

function sortDiagnosesByName( diagnoses )
{
    diagnoses.sort( function( diagnose1, diagnose2 ) 
    {
        var name1 = diagnose1.name,
			name2 = diagnose2.name;
            
        if( name1 < name2 ) return -1;
        else if( name2 < name1 ) return 1;
        else return 0;
    } );
}

function loadPraxis() 
{
	loadDiagnoses( function( diagnoses )
	{
		setDiagnosenCheckboxes( diagnoses );
	} );
}

function setDiagnosenCheckboxes( diagnose )
{
	var $DiagnosenCheckboxes = $( "#DiagnosenCheckboxes" ),
		$NebendiagnosenCheckboxes = $( "#NebendiagnosenCheckboxes" );

	diagnose.forEach( function( diagnose )
	{
		if( diagnose.isNebendiagnose )
			$NebendiagnosenCheckboxes.append( createDiagnoseCheckbox( diagnose ) );
		else
			$DiagnosenCheckboxes.append( createDiagnoseCheckbox( diagnose ) );
	} );
}

function createDiagnoseCheckbox( diagnose )
{
	var $diagnoseCheckbox = $( "<div></div>" );

	$diagnoseCheckbox.text( diagnose.name );

	$( $diagnoseCheckbox ).makeCheckbox( function( checked )
	{
		// TODO
	} );

	$diagnoseCheckbox.data( "diagnose-name", diagnose.name );
	return $diagnoseCheckbox;
}