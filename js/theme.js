;(function($) {
    "use strict"; 
    AOS.init({
        duration: 1000,

    });

    // Menu Search from 
    $(".js-search-dropdown-toggle").on("click", function () {
        $(".mnmd-search-full").toggleClass("On");
    });
    $("#mnmd-search-remove").on("click", function () {
        $(".mnmd-search-full").removeClass("On");
    });

    // maan Languages nice selector
    $(document).ready(function() {
        $('select').niceSelect();
    });

    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.fast-header-area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >=90) {
                    $(".fast-header-area").addClass("navbar-fixed").fadeIn();
                } else {
                    $(".fast-header-area").removeClass("navbar-fixed");
                }
            });
        };
    };
    
    // Mobile menu/
    $("#menu-opener").on('click', function () {
        $(".mobile-menu").toggleClass("active");
    });
    $(".remove-one").on('click', function () {
        $(".mobile-menu").removeClass("active");
    });  
    if($('.mobile-menu li.dropdown ul').length){
        $('.mobile-menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }

    
    // Scroll to top
    function scrollToTop() {
        if ($('.back-to-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.back-to-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                return false;
            });
        }
    } 

    //* Magnificpopup js
    function magnificPopup() {
        if ($('.play-btn').length) { 
            //Video Popup
            $('.play-btn').magnificPopup({
                disableOn: 200,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,   
            });
               
        };
    };
     
    /*owl carousel *cleint*/
    $('.cleint-office-logo').owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        items:5,
        autoplay:true,
        autoplayTimeout:8000,
        animateOut: 'fadeOut',
        smartSpeed: 1100,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            300:{
                items:3
            },
            600:{
                items:3
            },
            900:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
 
    /*owl carousel *testimonial*/
    $('.testimonial-wrap').owlCarousel({
        loop:true,
        margin:25,
        responsiveClass:true,
        items:4,
        autoplay:true,
        autoplayTimeout: 7000,
        animateOut: 'fadeOut',
        smartSpeed: 1100, 
        responsive:{
            0:{
                items:1
            },
            570:{
                items:2
            }, 
            1024:{
                items:3
            },
        }
    })
    
    //* counter-h1-up.js h1/
    function counterUp() {
        if ($('.funfact-text').length) { 
            $('.counter').counterUp({
                delay: 10,
                time: 1400, 
            });
        };
    };

    // HomePage-2 Banner Swiper
    var swiper = new Swiper(".swiper-hero", {  
        // loop: true,
        // autoplay: true,
        speed: 1000,
        autoplay:{
            delay:3000,
        }, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, 
    });

    //*deal Countdown
    function countDown() {
        if ($('.countdown-area').length) {
            $('.countdown').countdown('2022/10/31', function(event) {
                var $this = $(this).html(event.strftime('' 
                // + '<div class="items"><span>%d</span> Days</div>'
                + '<div class="countdown-items deal-one"><span>%H</span></div>'
                + '<div class="countdown-items deal-tow"><span>%M</span></div>'
                + '<div class="countdown-items"><span>%S</span></div>'));
            });
        };
    };
    // Categories of the Month
    var swiper = new Swiper(".categories-month-wrapar", { 
        slidesPerView: 5,
        spaceBetween: 25, 
        autoplay: true,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 1500,
        autoplay:{
            delay:1500,
        }, 
        breakpoints: {
            0: {
              slidesPerView: 2, 
            },
            570: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
        },
    }); 
  
    // Store of the Month
    var swiper = new Swiper(".store-wraper", { 
        slidesPerView: 4,
        spaceBetween: 25, 
        autoplay: true,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 1000,
        autoplay:{
            delay:5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1, 
            },
            570: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
        },
    }); 

    // detailes page
    var swiper = new Swiper(".product-small", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper2 = new Swiper(".product-bibs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1, 
    thumbs: {
        swiper: swiper,
    },
    });

    // quantity 
    function quantity() {
        let incrementPlus = $(".plus").click(function() {
            let $n = $(this)
                .parent(".quantity")
                .parent(".table-quantity form ,.product-quantity form")
                .find(".input-number");

            $n.val(Number($n.val()) + 1);
        });

        let incrementMinus = $(".minus").click(function() {
            let $n = $(this)
                .parent(".quantity")
                .parent(".table-quantity form ,.product-quantity form")
                .find(".input-number");
            let amount = Number($n.val());
            if (amount > 1) {
                $n.val(amount - 1);
            }
        });
    };
 

    // background-image
    function bgImg() {
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    }
 

    /*Function Calls*/   
    scrollToTop();
    navbarFixed ();  
    magnificPopup();
    counterUp();
    countDown();
    quantity();
    bgImg(); 
    
})(jQuery); 


