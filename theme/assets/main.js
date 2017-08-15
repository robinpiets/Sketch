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

  $('[data-behavior~=openShare]').click(function(e){
    e.preventDefault();
    $('.product-info__menu-item').removeClass('active');
    $('.product__details').removeClass('show');
    $('#share').addClass('show');
    $(this).addClass('active');
  });

  $('#product_configure_form').on("submit", function() {
    console.log("on submit");
    $('#cartModal').css({"opacity": "1", "z-index":"99999"});
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

  $('#openFavModal').click(function(e){
    e.preventDefault();
    $('#favModal').css({"opacity": "1", "z-index":"99999"});
    $('body').addClass("modal-open");
  });

  $('#closeFavModal').click(function(e){
    e.preventDefault();
    $('#favModal').css({"opacity": "", "z-index":""});
    $('body').removeClass("modal-open");
  });

  $('#closeCartModal').click(function(e){
    e.preventDefault();
    $('#cartModal').css({"opacity": "", "z-index":""});
    $('body').removeClass("modal-open");
  });

  $('select').niceSelect();

  $('.product-info__menu-item').smoothScroll({offset: -50});
  // var imageHeight = $('.product__image').height();
  // $('.product__info--desktop').height(imageHeight);
});

// $(window).resize(function() {
//   var imageHeight = $('.product__image').height();
//   $('.product__info--desktop').height(imageHeight);
// });
