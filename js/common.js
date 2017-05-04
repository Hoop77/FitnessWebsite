// =========================
// utility functions
// =========================

function parseXmlData( parseFunction, onParsingFinished )
{
	var $xml = $.parseXML( getXmlData() );
	parseFunction( $xml );
	onParsingFinished();
}

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

function openLinkInNewTab( link )
{
	var win = window.open( link, "_blank" );
	if( win )
		win.focus();
	else
		alert( "Bitte erlauben Sie popups für diese Seite!" );
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