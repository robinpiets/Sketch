var PRODUCT_CONTENT_DESKTOP,log=!1;log=!0,$(document).ready(function(){function o(){l=!0,setTimeout(function(){l=!1},2e3)}$("[data-behavior~=trigger-menu-dropdown]").click(function(o){o.preventDefault(),$(this).toggleClass("active"),$(this).parent().children(".menu-dropdown").slideToggle(500,"swing")}),$("[data-behavior~=toggle-share-dropdown]").click(function(o){o.preventDefault(),$(this).parent().children(".share-dropdown").slideToggle(500,"swing")}),$("[data-behavior~=open-mobile-menu]").click(function(o){o.preventDefault(),$(this).toggleClass("is-active"),$(".mobile-menu").toggleClass("is-active")}),$(".lookbook-link").click(function(){log&&console.log("Lookbook link clicked")}),$("[data-behavior~=openProductDetails]").click(function(o){o.preventDefault(),$(".product-info__menu-item").removeClass("active"),$(".product__details").removeClass("show"),$("#productDetails").addClass("show"),$(this).addClass("active")}),$("[data-behavior~=openFitAndSize]").click(function(o){log&&console.log("open fit and size"),o.preventDefault(),$(".product-info__menu-item").removeClass("active"),$(".product__details").removeClass("show"),$("#fitAndSize").addClass("show"),$(this).addClass("active")}),$("[data-behavior~=openShipping]").click(function(o){o.preventDefault(),$(".product-info__menu-item").removeClass("active"),$(".product__details").removeClass("show"),$("#shipping").addClass("show"),$(this).addClass("active")}),$("[data-behavior~=openShare]").click(function(o){o.preventDefault(),$(".product-info__menu-item").removeClass("active"),$(".product__details").removeClass("show"),$("#share").addClass("show"),$(this).addClass("active")}),$(".add-cart-form").on("submit",function(){return log&&console.log("on submit"),$(".cart-modal").css({opacity:"1","z-index":"99999"}),$("body").addClass("modal-open"),$form=$(this),postUrl=$form.attr("action"),$.ajax({url:postUrl,success:function(){log&&console.log("product successfully added");var o=$("#numCartItems").data("num-items");o+=1,$("#numCartItems").text(o)}}),!1}),$("[data-behavior~=open-fav-modal]").click(function(o){log&&console.log("open fav modal"),o.preventDefault(),$("#favModal").css({opacity:"1","z-index":"99999"}),$("body").addClass("modal-open")}),$("[data-behavior~=open-newsletter-modal]").click(function(o){o.preventDefault(),$("#newsletterModal").css({opacity:"1","z-index":"99999"}),$("body").addClass("modal-open")}),$("[data-behavior~=close-newsletter-modal]").click(function(o){o.preventDefault(),$("#newsletterModal").css({opacity:"","z-index":""}),$("body").removeClass("modal-open")}),$("[data-behavior~=close-fav-modal]").click(function(o){o.preventDefault(),$("#favModal").css({opacity:"","z-index":""}),$("body").removeClass("modal-open")}),$("[data-behavior~=close-cart-modal]").click(function(o){o.preventDefault(),$("#cartModal").css({opacity:"","z-index":""}),$("body").removeClass("modal-open")}),$("select").niceSelect(),$(".product__image--carousel").slick({prevArrow:"<div class='prev-arrow'><span class='arrow'><</span></div>",nextArrow:"<div class='next-arrow'><span class='arrow'>></span></div>"}),$(".product-info__menu-item").smoothScroll({offset:-50}),$(window).width()<576&&(log&&console.log("mobile width"),$(".product__container.show-on-desktop").length>0&&(PRODUCT_CONTENT_DESKTOP=$(".product__container.show-on-desktop").detach(),log&&console.log(PRODUCT_CONTENT_DESKTOP)));var e=$(".menu.desktop-menu .menu-dropdown .menu-link.active");if(e.length){var t=e.attr("href");if(t){var a=[],n=[],l=!1;$.ajax({url:t}).done(function(o){var e=!0;$(o).find(".product__columns .product-image").each(function(o,t){var l=$(this).attr("href"),i=l.replace(window.location.protocol+"//","");i=i.split("/"),i="/"+i[1],i==window.location.pathname?e=!1:e?a.push(i):n.push(i)}),n=$.merge(n,a),n.length&&log&&console.log(n)}).fail(function(){log&&console.log("fail")}),$(window).scroll(function(){$(window).scrollTop()>=$(document).height()-$(window).height()-200&&(l||o())})}}}),$(window).resize(function(){$(window).width()<576?(log&&console.log("mobile width"),$(".product__container.show-on-desktop").length>0&&(PRODUCT_CONTENT_DESKTOP=$(".product__container.show-on-desktop").detach(),log&&console.log(PRODUCT_CONTENT_DESKTOP))):(log&&console.log("desktop width"),log&&console.log(PRODUCT_CONTENT_DESKTOP),PRODUCT_CONTENT_DESKTOP&&(log&&console.log("append pc"),PRODUCT_CONTENT_DESKTOP.appendTo(".main-content"),PRODUCT_CONTENT_DESKTOP=null))});