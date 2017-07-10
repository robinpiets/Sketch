$(document).ready(function(){
  $('[data-behavior~=trigger-menu-dropdown]').click(function(e){
    e.preventDefault();
    console.log("Menu dropdown click");
    var dropdown = $(this).children('.menu-dropdown');
    dropdown.slideToggle(500, "swing");
  });

  $('[data-behavior~=open-mobile-menu]').click(function(e) {
    e.preventDefault();
    console.log("Burger menu clicked");
    $(this).toggleClass('is-active');
    $('.mobile-menu').toggleClass('is-active');
  });
});
