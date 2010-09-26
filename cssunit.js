/* 
 */

 $(document).ready(function() {
   $('html')
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






