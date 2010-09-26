
$(document).ready(function() {
  var css_text = $('body').cssComputed();
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

