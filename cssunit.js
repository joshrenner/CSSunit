/* 
 */


//this code need to be move in function
$(document).ready(function() {
  //create the export UI
  $('body').append('<div id="cssunit"><h3>CSSunit<a href="#">open</a></h3><div class="content"></div></div>');
  var cssunit = $('#cssunit');
  var menu =  '<ul>'
  + '<li><a href="#" class="track">start-selection</a></li>'
  + '<li><a href="#" class="untrack">stop-selection</a></li>'
  + '<li><a href="#" class="export">export test function</a></li>'
  + '</ul>';
 $('.content',cssunit).append(menu);
  $('h3 a',cssunit).click(function(event){
    $('#cssunit .content').slideToggle('fast');
  }
  );

  $('.track',cssunit).click(function(event){
    $('body:not(#cssunit)').outline('start'); //FIXME 'not' don't work
  });
  
  $('.untrack',cssunit).click(function(event){
    $('body:not(#cssunit)').outline('stop'); //FIXME 'not' don't work
  });
  
});






(function( $ ){
  
  //Select element like firebug
  $.fn.outline = function(statu) {
    return this.each(function() {
      var $this = $(this);
      if ( !statu || statu == 'start' ) {
        $this.bind('mouseover.cssunit mouseout.cssunit', function(event) {
          $(event.target).toggleClass('cssunit-outline-element');
        });

        $this.bind('click.cssunit',function(event) {
          $(event.target).toggleClass('cssunit-outline-element-selected');
        });
      }
      if ( !statu || statu == 'stop' ) {
        $this.unbind('.cssunit');
      }
    });
  };
})( jQuery );
