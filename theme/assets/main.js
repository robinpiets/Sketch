// SHAME: terrible global - client wanted project out the door
var PRODUCT_CONTENT_DESKTOP;

$(document).ready(function(){
  $('[data-behavior~=trigger-menu-dropdown]').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    var parent = $(this).parent();
    var dropdown = parent.children('.menu-dropdown');
    dropdown.slideToggle(500, "swing");
  });

  $('[data-behavior~=toggle-share-dropdown]').click(function(e){
    e.preventDefault();
    var parent = $(this).parent();
    var dropdown = parent.children('.share-dropdown');
    dropdown.slideToggle(500, "swing");
  });

  $('[data-behavior~=open-mobile-menu]').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.mobile-menu').toggleClass('is-active');
  });

  $('.lookbook-link').click(function(){
    console.log("Lookbook link clicked");
  });

  $('[data-behavior~=openProductDetails]').click(function(e){
    e.preventDefault();
    $('.product-info__menu-item').removeClass('active');
    $('.product__details').removeClass('show');
    $('#productDetails').addClass('show');
    $(this).addClass('active');
  });

  $('[data-behavior~=openFitAndSize]').click(function(e){
    console.log("open fit and size");
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

  $('[data-behavior~=openShare]').click(function(e){
    e.preventDefault();
    $('.product-info__menu-item').removeClass('active');
    $('.product__details').removeClass('show');
    $('#share').addClass('show');
    $(this).addClass('active');
  });

  $('.add-cart-form').on("submit", function() {
    console.log("on submit");
    $('.cart-modal').css({"opacity": "1", "z-index":"99999"});
    $('body').addClass("modal-open");
    $form = $(this);
    postUrl = $form.attr('action');
    $.ajax({
      url: postUrl,
      success: function() {
        console.log("product successfully added");
        var numItems = $('#numCartItems').data("num-items");
        numItems = numItems + 1;
        $('#numCartItems').text(numItems);
      }
    });
    return false;
  });

  $('[data-behavior~=open-fav-modal]').click(function(e){
    console.log("open fav modal");
    e.preventDefault();
    $('#favModal').css({"opacity": "1", "z-index":"99999"});
    $('body').addClass("modal-open");
  });

  $('[data-behavior~=open-newsletter-modal]').click(function(e){
    e.preventDefault();
    $('#newsletterModal').css({"opacity": "1", "z-index":"99999"});
    $('body').addClass("modal-open");
  });

  $('[data-behavior~=close-newsletter-modal]').click(function(e){
    e.preventDefault();
    $('#newsletterModal').css({"opacity": "", "z-index":""});
    $('body').removeClass("modal-open");
  });

  $('[data-behavior~=close-fav-modal]').click(function(e){
    e.preventDefault();
    $('#favModal').css({"opacity": "", "z-index":""});
    $('body').removeClass("modal-open");
  });

  $('[data-behavior~=close-cart-modal]').click(function(e){
    e.preventDefault();
    $('#cartModal').css({"opacity": "", "z-index":""});
    $('body').removeClass("modal-open");
  });

  $('select').niceSelect();
  
  $('.product__image--carousel').slick({
    prevArrow: "<div class='prev-arrow'><span class='arrow'><</span></div>",
    nextArrow: "<div class='next-arrow'><span class='arrow'>></span></div>"
  });


  $('.product-info__menu-item').smoothScroll({offset: -50});

  if ( $(window).width() < 576) {
    console.log("mobile width");
    if ($('.product__container.show-on-desktop').length > 0) {
      PRODUCT_CONTENT_DESKTOP = $('.product__container.show-on-desktop').detach();
      console.log(PRODUCT_CONTENT_DESKTOP);
    }
  }
});

$( window ).resize(function() {
  if ( $(window).width() < 576) {
    console.log("mobile width");
    if ($('.product__container.show-on-desktop').length > 0) {
      PRODUCT_CONTENT_DESKTOP = $('.product__container.show-on-desktop').detach();
      console.log(PRODUCT_CONTENT_DESKTOP);
    }
  } else {
    console.log("desktop width");
    console.log(PRODUCT_CONTENT_DESKTOP);
    if (PRODUCT_CONTENT_DESKTOP) {
      console.log("append pc");
      PRODUCT_CONTENT_DESKTOP.appendTo('.main-content');
      PRODUCT_CONTENT_DESKTOP = null;
    }
  }
});