// SHAME: terrible global - client wanted project out the door
var PRODUCT_CONTENT_DESKTOP;
var log = false;
	log = true;

$(document).ready(function() {

    // Default event listeners
    $('[data-behavior~=open-mobile-menu]').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.mobile-menu').toggleClass('is-active');
    });

    $('.lookbook-link').click(function() {
        if (log) console.log("Lookbook link clicked");
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

    $('[data-behavior~=trigger-menu-dropdown]').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        var parent = $(this).parent();
        var dropdown = parent.children('.menu-dropdown');
        dropdown.slideToggle(500, "swing");
    });

    function setEventListeners() {
        // Product event listeners

        $('[data-behavior~=toggle-share-dropdown]').click(function(e) {
            e.preventDefault();
            var parent = $(this).parent();
            var dropdown = parent.children('.share-dropdown');
            dropdown.slideToggle(500, "swing");
        });

        $('[data-behavior~=openProductDetails]').click(function(e) {
            e.preventDefault();
            var parent = $(this).parents('.product__extra-info')
            parent.find('.product-info__menu-item').removeClass('active');
            parent.find('.product__details').removeClass('show');
            parent.find('.info-productDetails').addClass('show');
            $(this).addClass('active');
        });

        $('[data-behavior~=openFitAndSize]').click(function(e) {
            if (log)
                console.log("open fit and size");
            e.preventDefault();
            var parent = $(this).parents('.product__extra-info')
            parent.find('.product-info__menu-item').removeClass('active');
            parent.find('.product__details').removeClass('show');
            parent.find('.info-fitAndSize').addClass('show');
            $(this).addClass('active');
        });

        $('[data-behavior~=openShipping]').click(function(e) {
            e.preventDefault();
            var parent = $(this).parents('.product__extra-info')
            parent.find('.product-info__menu-item').removeClass('active');
            parent.find('.product__details').removeClass('show');
            parent.find('.info-shipping').addClass('show');
            $(this).addClass('active');
        });

        $('[data-behavior~=openShare]').click(function(e) {
            e.preventDefault();
            var parent = $(this).parents('.product__extra-info')
            parent.find('.product-info__menu-item').removeClass('active');
            parent.find('.product__details').removeClass('show');
            parent.find('.info-share').addClass('show');
            $(this).addClass('active');
        });

        $('.add-cart-form').off();
        $('.add-cart-form').on("submit", function(e) {
            var parent = $(this).parents('.product__container')
            if (log) {
                console.log("on cart submit", parent);
            }
            parent.find('.cart-modal.show-on-desktop').css({"opacity": "1", "z-index": "99999"});
            parent.nextAll('.cart-modal.show-on-mobile').css({"opacity": "1", "z-index": "99999"});

            $('body').addClass("modal-open");
            $form = $(this);
            postUrl = $form.attr('action');
            $.ajax({
                url: postUrl,
                success: function() {
                    if (log) console.log("product successfully added");
                    var numItems = $('#numCartItems').data("num-items");
                    numItems = numItems + 1;
                    $('#numCartItems').text(numItems);
                }
            });

            return false;
        });

        $('[data-behavior~=close-cart-modal]').click(function(e) {
            // console.log('close');
            e.preventDefault();
            $('.cart-modal').css({"opacity": "", "z-index": ""});
            $('body').removeClass("modal-open");
        });

        // $('[data-behavior~=open-fav-modal]').off()
        $('[data-behavior~=open-fav-modal]').click(function(e) {
            if (log) console.log("open fav modal");
            e.preventDefault();
            var parent = $(this).parents('.product__container')
            parent.find('.favModal.show-on-desktop').css({"opacity": "1", "z-index": "99999"});
            parent.nextAll('.favModal.show-on-mobile').css({"opacity": "1", "z-index": "99999"});
            $('body').addClass("modal-open");
        });

        $('[data-behavior~=close-fav-modal]').click(function(e) {
            e.preventDefault();
            $('.favModal').css({"opacity": "", "z-index": ""});
            $('body').removeClass("modal-open");
        });


		$('[data-behavior]').each(function(index, el) {
            // console.log(index);
		});

        console.log('added eventlisterners')
        // $('.product__container').addClass('hasEventListeners');
    }
    setEventListeners()

    if ($(window).width() < 576) {
        // if (log) console.log("mobile width");
        if ($('.product__container.show-on-desktop').length > 0) {
            PRODUCT_CONTENT_DESKTOP = $('.product__container.show-on-desktop').detach();
            // if (log) console.log(PRODUCT_CONTENT_DESKTOP);
        }
    }


    function restyleProducts() {
        $('.product__container.show-on-desktop').each(function(index, el) {
            if ( $(this).find('.product__image--container').length <= 3 ) {
                $(this).addClass('product-small')
            }
        });

        $('.product__image--carousel').not('.slick-initialized').slick({prevArrow: "<div class='prev-arrow'><span class='arrow'><</span></div>", nextArrow: "<div class='next-arrow'><span class='arrow'>></span></div>"});

        $('select').not('.nice-selected').niceSelect().addClass('nice-selected');
        $('.product-info__menu-item').not('.smooth-scroll').smoothScroll({offset: -50}).addClass('smooth-scroll');
    }
    restyleProducts();
    // alert('test')
	// Load more products on product-page
	var activeLink = $('.menu.desktop-menu .menu-dropdown .menu-link.active'),
        canLoadNewProducts = false;
	if ( activeLink.length && $('.product__container').length ) {
		var href = activeLink.attr('href');
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
                    if ( productHref[1] == 'us') {
                        productHref = '/us/' + productHref[2];
                        // console.log( '2: ', productHref );
                    } else {
                        productHref = '/' + productHref[1];
                        // console.log( '1: ', productHref );
                    }
                    // alert(productHref[1])
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
					// if (log) console.log( allProductsTotal );
                    canLoadNewProducts = true;
				}
	    	})
			.fail(function() {
				// if (log) console.log("fail");
			});

			function loadNewProduct() {
				loadingProduct = true;
				var newProduct = allProductsTotal[0];
				allProductsTotal.splice(0, 1);

				if (log) console.log("Loading new product: ", newProduct);
				// Load product info from product url
				$.ajax({url: newProduct}).done(function(e) {
					$('.dynamic-content.main-content').html( $('.dynamic-content.main-content').html() + $(e).find('.main-content').not('.dynamic-content').html() )
                    setTimeout(function () {
                        $('.dynamic-content .product__container.show-on-mobile').last().addClass('new-product')
                        $('.dynamic-content .product__container.show-on-desktop').last().addClass('new-product')
                        $('.product__separator').addClass('product-loaded')
                        restyleProducts()

                        // Check if new product is uneven >
                        if ( Math.abs($('.dynamic-content .product__container.show-on-mobile').length % 2) == 1 ) {
                            console.log('uneven');
                            $('.dynamic-content .product__container.show-on-desktop').last().addClass('product-uneven-columns')
                        }

                        setEventListeners()
                    }, 10);
				});


				setTimeout(function () {
					loadingProduct = false;
				}, 1000);
			}
			function allProductsLoaded() {
                if (log) console.log('Finished loading products');
				finishedLoadingProducts = true;
                $('.product__separator').last().addClass('all-products-loaded')
			}

			$(window).scroll(function() {
				var buffer = 300;
				if ( $(window).scrollTop() >= $(document).height() - $(window).height() - buffer ) {
                    // Load new product
                    if ( canLoadNewProducts ) {
                        if (!loadingProduct && allProductsTotal.length) loadNewProduct();
                        if (!loadingProduct && !allProductsTotal.length && !finishedLoadingProducts) allProductsLoaded();
                    }
				}
			});
		}
	}
});

$(window).keyup(function(e) {
	// console.log( e.keyCode );
    // For gebugging
    // if ( e.keyCode == 192 ) {
    //     $('.product__container.show-on-desktop').each(function(index, el) {
    //         if ( $(this).find('.product__image--container').length <= 3 ) {
    //             $(this).addClass('product-small')
    //         }
    //
    //     });
    //     console.log($('.product__container.show-on-desktop').length + " products");
    // }
});

$(window).resize(function() {
    if ($(window).width() < 576) {
        // if (log) console.log("mobile width");
        if ($('.product__container.show-on-desktop').length > 0) {
            PRODUCT_CONTENT_DESKTOP = $('.product__container.show-on-desktop').detach();
            // if (log) console.log(PRODUCT_CONTENT_DESKTOP);
        }
    } else {
        // if (log) console.log("desktop width");
        // if (log) console.log(PRODUCT_CONTENT_DESKTOP);
        if (PRODUCT_CONTENT_DESKTOP) {
            // if (log) console.log("append pc");
            PRODUCT_CONTENT_DESKTOP.appendTo('.main-content');
            PRODUCT_CONTENT_DESKTOP = null;
        }
    }
});
