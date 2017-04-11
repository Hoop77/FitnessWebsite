function loadDiagnosen() 
{
    $.ajax( {
        url: "Daten.xml",
        dataType: "xml",
        success: parseDiagnosen,
        error: function(){ alert( "Error: Diagnosen konnten nicht geladen werden!" ); }
    } );
}

function parseDiagnosen( xml )
{
    var $Daten = $( xml ).find( "Daten" ),
        $Diagnosen = $( $Daten ).find( "Diagnosen" )[ 0 ],
        DiagnoseList = $( $Diagnosen ).find( "Diagnose" ),
        liDiagnoseList = [];

    $( DiagnoseList ).each( function()
    {
        var Diagnose = this;
            name = $( Diagnose ).attr( "Name" );
        
        liDiagnoseList.push( createLiDiagnose( name ) );
    }, this );

    sortByName( liDiagnoseList );
    addDiagnosenToContainer( liDiagnoseList );
}

function createLiDiagnose( name ) 
{
    var $liDiagnose = $( "<li></li>" );

    $liDiagnose.addClass( "box" );
    $liDiagnose.addClass( "box-small" );
    $liDiagnose.addClass( "list-item-no-enum" );
    $liDiagnose.addClass( "h-centered" );
    $liDiagnose.addClass( "v-centered" );
    $liDiagnose.addClass( "v-gap" );
    $liDiagnose.addClass( "transparent" );
    $liDiagnose.addClass( "transparent-hover" );
    $liDiagnose.addClass( "color-transition" );
    $liDiagnose.addClass( "link" );
    $liDiagnose.addClass( "uppercase" );
    $liDiagnose.text( name );
    $liDiagnose.data( "Name", name );
    $liDiagnose.click( function() 
    {
        window.location = "Diagnosen/" + $( this ).data( "Name" ) + ".html";
    } );

    return $liDiagnose;
}

function sortByName( list )
{
    list.sort( function( $el1, $el2 ) 
    {
        var name1 = $( $el1 ).data( "Name" ),
            name2 = $( $el2 ).data( "Name" );
            
        if( name1 < name2 ) return -1;
        else if( name2 < name1 ) return 1;
        else return 0;
    } );
}

function addDiagnosenToContainer( liDiagnoseList )
{
    var $olDiagnosen = $( "#olDiagnosen" );
    liDiagnoseList.forEach( function( liDiagnose ) 
    {
        $olDiagnosen.append( liDiagnose );
    } );
}