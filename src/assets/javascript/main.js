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

  $('.product__image--carousel').slick({
    prevArrow: "<div class='prev-arrow'><span class='arrow'><</span></div>",
    nextArrow: "<div class='next-arrow'><span class='arrow'>></span></div>"
  });

  $('[data-behavior~=openProductDetails]').click(function(e){
    e.preventDefault();
    $('.product-info__menu-item').removeClass('active');
    $('.product__details').removeClass('show');
    $('#productDetails').addClass('show');
    $(this).addClass('active');
  });

  $('[data-behavior~=openFitAndSize]').click(function(e){
    e.preventDefault();
    $('.product-info__menu-item').removeClass('active');
    $('.product__details').removeClass('show');
    $('#fitAndSize').addClass('show');
    $(this).addClass('active');
  });

  $('[data-behavior~=openShipping]').click(function(e){
    e.preventDefault();
    $('.product-info__menu-item').removeClass('active');
    $('.product__details').removeClass('show');
    $('#shipping').addClass('show');
    $(this).addClass('active');
  });
});
