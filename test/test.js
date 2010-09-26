
$(document).ready(function() {
  var css_text = $('body').getCssAll();
  console.log(css_text);
  //$('#test-me-log').html(css_text);
  //var title = $('h2');
  var el_style = $('h2').css('color');
  
  //console.log(el_style);
  //$('#test-me-log').html(el_style.toSource());
  var actual;


  ////
  actual = $('h2').css('color');
  module('Simple CSS');
  test("title color blue", 1, function() {
    same( actual, 'rgb(0, 128, 0)', 'message' );
  });
    test("title color red", 1, function() {
    same( actual, 'rgb(255, 0, 0)', 'message' );
  });


});




/*
module("CSS");
test("setup", function() {
	document.getElementById("qunit-fixture").innerHTML = "foobar";
});
test("basics", function() {
	equal( document.getElementById("qunit-fixture").innerHTML, "foobar", "automatically reset" );
});
*/


/*
 * Get all the computed style of an element
 */
jQuery.fn.getCssAll = function() {
    var attr = ['font-family','font-size','font-weight','font-style','color',
        'text-transform','text-decoration','letter-spacing','word-spacing',
        'line-height','text-align','vertical-align','direction','background-color',
        'background-image','background-repeat','background-position',
        'background-attachment','opacity','width','height','top','right','bottom',
        'left','margin-top','margin-right','margin-bottom','margin-left',
        'padding-top','padding-right','padding-bottom','padding-left',
        'border-top-width','border-right-width','border-bottom-width',
        'border-left-width','border-top-color','border-right-color',
        'border-bottom-color','border-left-color','border-top-style',
        'border-right-style','border-bottom-style','border-left-style','position',
        'display','visibility','z-index','overflow-x','overflow-y','white-space',
        'clip','float','clear','cursor','list-style-image','list-style-position',
        'list-style-type','marker-offset'];
    var len = attr.length, obj = {};
    for (var i = 0; i < len; i++)
        obj[attr[i]] = jQuery.fn.css.call(this, attr[i]);
    return obj;
}
