// SHAME: terrible global - client wanted project out the door
var PRODUCT_CONTENT_DESKTOP;
var log = false;
	log = true;

$(document).ready(function() {
    $('[data-behavior~=trigger-menu-dropdown]').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        var parent = $(this).parent();
        var dropdown = parent.children('.menu-dropdown');
        dropdown.slideToggle(500, "swing");
    });

    $('[data-behavior~=toggle-share-dropdown]').click(function(e) {
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

    $('.lookbook-link').click(function() {
        if (log)
            console.log("Lookbook link clicked");
        }
    );

    $('[data-behavior~=openProductDetails]').click(function(e) {
        e.preventDefault();
        $('.product-info__menu-item').removeClass('active');
        $('.product__details').removeClass('show');
        $('#productDetails').addClass('show');
        $(this).addClass('active');
    });

    $('[data-behavior~=openFitAndSize]').click(function(e) {
        if (log)
            console.log("open fit and size");
        e.preventDefault();
        $('.product-info__menu-item').removeClass('active');
        $('.product__details').removeClass('show');
        $('#fitAndSize').addClass('show');
        $(this).addClass('active');
    });

    $('[data-behavior~=openShipping]').click(function(e) {
        e.preventDefault();
        $('.product-info__menu-item').removeClass('active');
        $('.product__details').removeClass('show');
        $('#shipping').addClass('show');
        $(this).addClass('active');
    });

    $('[data-behavior~=openShare]').click(function(e) {
        e.preventDefault();
        $('.product-info__menu-item').removeClass('active');
        $('.product__details').removeClass('show');
        $('#share').addClass('show');
        $(this).addClass('active');
    });

    $('.add-cart-form').on("submit", function() {
        if (log)
            console.log("on submit");
        $('.cart-modal').css({"opacity": "1", "z-index": "99999"});
        $('body').addClass("modal-open");
        $form = $(this);
        postUrl = $form.attr('action');
        $.ajax({
            url: postUrl,
            success: function() {
                if (log)
                    console.log("product successfully added");
                var numItems = $('#numCartItems').data("num-items");
                numItems = numItems + 1;
                $('#numCartItems').text(numItems);
            }
        });
        return false;
    });

    $('[data-behavior~=open-fav-modal]').click(function(e) {
        if (log)
            console.log("open fav modal");
        e.preventDefault();
        $('#favModal').css({"opacity": "1", "z-index": "99999"});
        $('body').addClass("modal-open");
    });

    $('[data-behavior~=open-newsletter-modal]').click(function(e) {
        e.preventDefault();
        $('#newsletterModal').css({"opacity": "1", "z-index": "99999"});
        $('body').addClass("modal-open");
    });

    $('[data-behavior~=close-newsletter-modal]').click(function(e) {
        e.preventDefault();
        $('#newsletterModal').css({"opacity": "", "z-index": ""});
        $('body').removeClass("modal-open");
    });

    $('[data-behavior~=close-fav-modal]').click(function(e) {
        e.preventDefault();
        $('#favModal').css({"opacity": "", "z-index": ""});
        $('body').removeClass("modal-open");
    });

    $('[data-behavior~=close-cart-modal]').click(function(e) {
        e.preventDefault();
        $('#cartModal').css({"opacity": "", "z-index": ""});
        $('body').removeClass("modal-open");
    });

    $('select').niceSelect();

    $('.product__image--carousel').slick({prevArrow: "<div class='prev-arrow'><span class='arrow'><</span></div>", nextArrow: "<div class='next-arrow'><span class='arrow'>></span></div>"});

    $('.product-info__menu-item').smoothScroll({offset: -50});

    if ($(window).width() < 576) {
        if (log)
            console.log("mobile width");
        if ($('.product__container.show-on-desktop').length > 0) {
            PRODUCT_CONTENT_DESKTOP = $('.product__container.show-on-desktop').detach();
            if (log) console.log(PRODUCT_CONTENT_DESKTOP);
        }
    }

    // $.ajax({url: "test.html", context: document.body})
	// 	.done(function() {
	//         // $(this).addClass("done");
	// 		if (log)
	//             console.log("done");
    // 	})
	// 	.fail(function() {
	// 		if (log)
	// 	    	console.log("fail");
	// 	})


	// Load more products on product-page
	var activeLink = $('.menu.desktop-menu .menu-dropdown .menu-link.active')
	if ( activeLink.length ) {
		var href = activeLink.attr('href')
		if (href) {
			var allProductsFirst = [],
				allProductsTotal = [],
				loadingProduct = false,
				finishedLoadingProducts = false;

			// First Ajax call to get all products
			$.ajax({url: href}).done(function(e) {
		        // Get all products from current category
				var firstArray = true;
				$(e).find('.product__columns .product-image').each(function(index, el) {
					var productHrefOriginal = $(this).attr('href');
					var productHref = productHrefOriginal.replace( window.location.protocol + '//', '' );
					productHref = productHref.split( '/' );
					productHref = '/' + productHref[1];
					if ( productHref == window.location.pathname ) {
						// if (log) console.log('SAME: ', productHref);
						firstArray = false;
					} else {
						// if (log) console.log( productHref );
						if ( firstArray ) allProductsFirst.push(productHref)
						else allProductsTotal.push(productHref)
					}
				});
				// Merging both arrays
				allProductsTotal = $.merge(allProductsTotal, allProductsFirst)
				if (allProductsTotal.length) {
					if (log) console.log( allProductsTotal );

				}
	    	})
			.fail(function() {
				if (log)
			    	console.log("fail");
			});

			function loadNewProduct() {
				loadingProduct = true;
				var newProduct = allProductsTotal[0];
				allProductsTotal.splice(0, 1);

				if (log) console.log("Loading new product: ", newProduct);
				// Load product info from product url
				$.ajax({url: newProduct}).done(function(e) {
					// var productContent = $(e).find('.damoy__container .main-content')
					// console.log( $(e).find('.main-content').not('.dynamic-content').html() );
					$('.dynamic-content.main-content').html( $('.dynamic-content.main-content').html() + $(e).find('.main-content').not('.dynamic-content').html() )
				});

				setTimeout(function () {
					loadingProduct = false;
				}, 1000);
			}
			function allProductsLoaded() {
				finishedLoadingProducts = true;
				if (log) console.log('Finished loading products');
			}

			$(window).scroll(function() {
				var buffer = 200;
				if ( $(window).scrollTop() >= $(document).height() - $(window).height() - buffer ) {
					if (!loadingProduct && allProductsTotal.length) loadNewProduct();
					if (!loadingProduct && !allProductsTotal.length && !finishedLoadingProducts) allProductsLoaded();
				}
			});
		}
	}
});

$(window).resize(function() {
    if ($(window).width() < 576) {
        if (log)
            console.log("mobile width");
        if ($('.product__container.show-on-desktop').length > 0) {
            PRODUCT_CONTENT_DESKTOP = $('.product__container.show-on-desktop').detach();
            if (log)
                console.log(PRODUCT_CONTENT_DESKTOP);
            }
        } else {
        if (log)
            console.log("desktop width");
        if (log)
            console.log(PRODUCT_CONTENT_DESKTOP);
        if (PRODUCT_CONTENT_DESKTOP) {
            if (log)
                console.log("append pc");
            PRODUCT_CONTENT_DESKTOP.appendTo('.main-content');
            PRODUCT_CONTENT_DESKTOP = null;
        }
    }
});
