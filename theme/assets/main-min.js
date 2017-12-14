var PRODUCT_CONTENT_DESKTOP,log=!1;console.log(window.location.href),0!=window.location.href.indexOf("https://1")&&0!=window.location.href.indexOf("http://1")||(log=!0),$(document).ready(function(){function o(){$("[data-behavior~=toggle-share-dropdown]").click(function(o){o.preventDefault(),$(this).parent().children(".share-dropdown").slideToggle(500,"swing")}),$("[data-behavior~=openProductDetails]").click(function(o){o.preventDefault();var t=$(this).parents(".product__extra-info");t.find(".product-info__menu-item").removeClass("active"),t.find(".product__details").removeClass("show"),t.find(".info-productDetails").addClass("show"),$(this).addClass("active")}),$("[data-behavior~=openFitAndSize]").click(function(o){log&&console.log("open fit and size"),o.preventDefault();var t=$(this).parents(".product__extra-info");t.find(".product-info__menu-item").removeClass("active"),t.find(".product__details").removeClass("show"),t.find(".info-fitAndSize").addClass("show"),$(this).addClass("active")}),$("[data-behavior~=openShipping]").click(function(o){o.preventDefault();var t=$(this).parents(".product__extra-info");t.find(".product-info__menu-item").removeClass("active"),t.find(".product__details").removeClass("show"),t.find(".info-shipping").addClass("show"),$(this).addClass("active")}),$("[data-behavior~=openShare]").click(function(o){o.preventDefault();var t=$(this).parents(".product__extra-info");t.find(".product-info__menu-item").removeClass("active"),t.find(".product__details").removeClass("show"),t.find(".info-share").addClass("show"),$(this).addClass("active")}),$(".add-cart-form").off(),$(".add-cart-form").on("submit",function(o){var t=$(this).parents(".product__container");return log&&console.log("on cart submit",t),t.find(".cart-modal.show-on-desktop").css({opacity:"1","z-index":"99999"}),t.nextAll(".cart-modal.show-on-mobile").css({opacity:"1","z-index":"99999"}),$("body").addClass("modal-open"),$form=$(this),postUrl=$form.attr("action"),$.ajax({url:postUrl,success:function(){log&&console.log("product successfully added");var o=$("#numCartItems").data("num-items");o+=1,$("#numCartItems").text(o)}}),!1}),$("[data-behavior~=close-cart-modal]").click(function(o){o.preventDefault(),$(".cart-modal").css({opacity:"","z-index":""}),$("body").removeClass("modal-open")}),$("[data-behavior~=open-fav-modal]").click(function(o){log&&console.log("open fav modal"),o.preventDefault();var t=$(this).parents(".product__container");t.find(".favModal.show-on-desktop").css({opacity:"1","z-index":"99999"}),t.nextAll(".favModal.show-on-mobile").css({opacity:"1","z-index":"99999"}),$("body").addClass("modal-open")}),$("[data-behavior~=close-fav-modal]").click(function(o){o.preventDefault(),$(".favModal").css({opacity:"","z-index":""}),$("body").removeClass("modal-open")}),$(".product__container.show-on-desktop:not(.updated) .product__image--container").on("mouseover",function(){$(this).children(".photo").css({transform:"scale(1.8962766)"})}).on("mouseout",function(){$(this).children(".photo").css({transform:"scale(1)",width:""})}).on("mousemove",function(o){$(this).children(".photo").css({"transform-origin":(o.pageX-$(this).offset().left)/$(this).width()*100+"% "+(o.pageY-$(this).offset().top)/$(this).height()*100+"%"})}).each(function(){$(this).append('<div class="photo"></div>').children(".photo").css({"background-image":$(this).css("background-image")})}).css("background-image","")}function t(){$(".product__container").not(".updated").each(function(o,t){var n=$(this).attr("data-product-id");$(this).find("select").each(function(o,t){var e=$(this).attr("onchange");e=e.replace("product_configure_form",$(this).parents("form").attr("id")),e=e.replace("product_configure_form'",$(this).parents("form").attr("id")+"'"),$(this).attr("onchange",e);var a=$(this).attr("id")+"_"+n;$(this).attr("id",a)}),$(this).addClass("updated")}),$(".product__container.show-on-desktop").each(function(o,t){$(this).find(".product__image--container").length<=3&&$(this).addClass("product-small")}),$(".product__image--carousel").not(".slick-initialized").slick({prevArrow:"<div class='prev-arrow'><span class='arrow'><</span></div>",nextArrow:"<div class='next-arrow'><span class='arrow'>></span></div>"}),$("select").not(".nice-selected").niceSelect().addClass("nice-selected"),$(".product-info__menu-item").not(".smooth-scroll").smoothScroll({offset:-50}).addClass("smooth-scroll")}function n(){r=!0;var n=c[0];c.splice(0,1),log&&console.log("Loading new product: ",n),$.ajax({url:n}).done(function(n){var e=$(n).find(".main-content").not(".dynamic-content");e.find(".dynamic-content").remove(),$(".dynamic-content.main-content").append(e.html()),setTimeout(function(){$(".dynamic-content .product__container.show-on-mobile").last().addClass("new-product"),$(".dynamic-content .product__container.show-on-desktop").last().addClass("new-product"),$(".product__separator").addClass("product-loaded"),1==Math.abs($(".dynamic-content .product__container.show-on-mobile").length%2)&&$(".dynamic-content .product__container.show-on-desktop").last().addClass("product-uneven-columns"),o(),t()},10)}),setTimeout(function(){r=!1},1e3)}function e(){log&&console.log("Finished loading products"),l=!0,$(".product__separator").last().addClass("all-products-loaded")}$("[data-behavior~=open-mobile-menu]").click(function(o){o.preventDefault(),$(this).toggleClass("is-active"),$(".mobile-menu").toggleClass("is-active")}),$(".lookbook-link").click(function(){log&&console.log("Lookbook link clicked")}),$("[data-behavior~=open-newsletter-modal]").click(function(o){o.preventDefault(),$("#newsletterModal").css({opacity:"1","z-index":"99999"}),$("body").addClass("modal-open")}),$("[data-behavior~=close-newsletter-modal]").click(function(o){o.preventDefault(),$("#newsletterModal").css({opacity:"","z-index":""}),$("body").removeClass("modal-open")}),$("[data-behavior~=trigger-menu-dropdown]").click(function(o){o.preventDefault(),$(this).toggleClass("active"),$(this).parent().children(".menu-dropdown").slideToggle(500,"swing")}),o(),$(window).width()<576&&$(".product__container.show-on-desktop").length>0&&(PRODUCT_CONTENT_DESKTOP=$(".product__container.show-on-desktop").detach()),t();var a=$(".menu.desktop-menu .menu-dropdown .menu-link.active"),i=!1;if(a.length&&$(".product__container").length){var s=a.attr("href");if(s){var d=[],c=[],r=!1,l=!1;$.ajax({url:s}).done(function(o){var t=!0;$(o).find(".product__columns .product-image").each(function(o,n){var e=$(this).attr("href"),a=e.replace(window.location.protocol+"//","");a=a.split("/"),a=2==a[1].length?"/"+a[1]+"/"+a[2]:"/"+a[1],a==window.location.pathname?t=!1:t?d.push(a):c.push(a)}),c=$.merge(c,d),c.length&&(i=!0)}).fail(function(){log&&console.log("fail")}),$(window).scroll(function(){$(window).scrollTop()>=$(document).height()-$(window).height()-300&&i&&(!r&&c.length&&n(),r||c.length||l||e())})}}}),$(window).resize(function(){$(window).width()<576?(log&&console.log("mobile width"),$(".product__container.show-on-desktop").length>0&&(PRODUCT_CONTENT_DESKTOP=$(".product__container.show-on-desktop").detach())):(log&&console.log("desktop width"),PRODUCT_CONTENT_DESKTOP&&(PRODUCT_CONTENT_DESKTOP.appendTo(".main-content"),PRODUCT_CONTENT_DESKTOP=null))});