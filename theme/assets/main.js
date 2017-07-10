$(document).ready(function(){
  $('[data-behavior~=trigger-menu-dropdown]').click(function(e){
    e.preventDefault();
    console.log("Menu dropdown click");
    var dropdown = $(this).children('.menu-dropdown');
    dropdown.slideToggle(500, "swing");
  });
});
