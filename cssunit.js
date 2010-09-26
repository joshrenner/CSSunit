/* 
 */

 $(document).ready(function() {
   //create the export UI
   $('body').append('<div id="cssunit"><h3>CSSunit<a href="#">open</a></h3><div class="content">asdf</div></div>');

   $('#cssunit h3 a').click(function(event){
     $('#cssunit .content').slideToggle('fast');
   }

  );

   //element select firebug like
   $('body').not('#cssunit') //FIXME not doesn't work
     .mouseover(function(event) {
       $(event.target).addClass('cssunit-outline-element');
     })
     .mouseout(function(event) {
       $(event.target).removeClass('cssunit-outline-element');
     })
     .click(function(event) {
       $(event.target).toggleClass('cssunit-outline-element-selected');
     });
 });






