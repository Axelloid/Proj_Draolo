/* ===================== active your plugin here ========================= */

(function($) {
    "use strict";


    /* ==========================================================================
   window laod function
   ========================================================================== */
    
    $(window).load(function() {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        $("#status").fadeOut();
        $("#drop-preloader").delay(200).fadeOut(1000);
    });


    /* ==========================================================================
   document ready function
   ========================================================================== */
    
    $(document).ready(function() {

        $(window).trigger("resize");
        init_classic_menu();
        initWorkFilter();
        init_lightbox();
        init_masonry();
        $.stellar({
          horizontalScrolling: false,
          verticalOffset: 40
        });
        // Countdown
          // To change date, simply edit: var endDate = "Feb 26, 2017 20:39:00";
          $(function() {
            var endDate = "Feb 26, 2017 20:39:00";
            $('.drop-countdown').countdown({
              date: endDate,
              render: function(data) {
                $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365) + parseInt(this.leadingZeros(data.days, 2))) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="drop-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
              }
            });
          });
         // smooth scroll 
        $(function() {
              $('.localscroll').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
                }
              }
              });
            });
        // ajax mail Chimp
        $('#drop-mc-form').ajaxChimp({
                language: 'tr98',
                url: 'http://hasib-rahman.us8.list-manage2.com/subscribe/post?u=74e8ba57153fb3b7bae403d34&id=514058c103'                
            });


          // Mailchimp translation
            //
            // Defaults:
            //'submit': 'Submitting...',
            //  0: 'We have sent you a confirmation email',
            //  1: 'Please enter a value',
            //  2: 'An email address must contain a single @',
            //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
            //  4: 'The username portion of the email address is invalid (the portion before the @: )',
            //  5: 'This email address looks fake or invalid. Please enter a real email address'

            $.ajaxChimp.translations.tr98 = {
              'submit': 'Submitting...',
              0: '<p> We will be in touch soon!</p>',
              1: '<p> Please enter a value.</p>',
              2: '<p> E-mail address is not valid.</p>',
              3: '<p> E-mail address is not valid.</p>',
              4: '<p> E-mail address is not valid.</p>',
              5: '<p> E-mail address is not valid.</p>'
            };
        $(".owl-blog-gallery").owlCarousel({
            singleItem:true,
            autoPlay: true,
            stopOnHover: true
        });
        $(".owl-blog-gallery").owlCarousel({
            singleItem:true,
            autoPlay: true,
            stopOnHover: true
        });
        $("#drop-testimonial").owlCarousel({
            singleItem: true
        });
        // skill bar 
        $(".drop-progress").waypoint( function(){
            function loadDaBars() {
              var bar = $('.progress-bar');
              var bar_width;

              $(function(){
                $(bar).each(function(){
                  bar_width = $(this).attr('aria-valuenow');
                  $(this).width(bar_width + '%');
                });
              });
          }
          loadDaBars();
        }, {offset: 500});
        $(".gradient-chart").each(function() {
            var $this = $(this);
            var line_width = Number($(this).data('scale-linewidth')),
                line_cap = $(this).data('scale-linecap');
            $this.waypoint(function() {
              $this.easyPieChart({
                  barColor: function(percent) {
                  var ctx = this.renderer.getCtx();
                  var canvas = this.renderer.getCanvas();
                  var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                      gradient.addColorStop(0, "#00dbde ");
                      gradient.addColorStop(1, "#fc00ff");
                  return gradient;
                },
                  trackColor: '#ECF0F1',
                  scaleLength: false,
                  size: 317,
                  lineWidth: line_width,
                  lineCap: line_cap,
                  onStep: function(from, to, percent) {
                      jQuery(this.el).find('.percent').text(Math.round(percent));
                  }
              });
          } , { offset: '500px' } );
        });
        // JQUERY.MB.YTPLAYER
            
            $(function(){
              $(".player").mb_YTPlayer({
                showControls: false,
                stopMovieOnBlur: false
              });
            });

    });
    
    $(window).resize(function() {
        init_classic_menu_resize();
    });

/* --------------------------------------------
     Platform detect
     --------------------------------------------- */
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    }
    else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }
    
    var mozillaTest;
    if (/mozilla/.test(navigator.userAgent)) {
        mozillaTest = true;
    }
    else {
        mozillaTest = false;
    }
    var safariTest;
    if (/safari/.test(navigator.userAgent)) {
        safariTest = true;
    }
    else {
        safariTest = false;
    }
    
    // Detect touch devices    
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }
    

// Function for block height 100%
function height_line(height_object, height_donor){
    height_object.height(height_donor.height());
    height_object.css({
        "line-height": height_donor.height() + "px"
    });
}

/* ---------------------------------------------
 Nav panel classic
 --------------------------------------------- */

var mobile_nav = $(".mobile-nav");
var desktop_nav = $(".desktop-nav");

function init_classic_menu_resize(){
    
    // Mobile menu max height
    $(".mobile-on .desktop-nav > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px");
    
    // Mobile menu style toggle
    if ($(window).width() <= 1024) {
        $(".main-nav").addClass("mobile-on");
    }
    else 
        if ($(window).width() > 1024) {
            $(".main-nav").removeClass("mobile-on");
            desktop_nav.show();
        }
}

function init_classic_menu(){

    
    // Navbar sticky
    
    $(".js-stick").sticky({
        topSpacing: 0
    });
    
    
    height_line($(".inner-nav > ul > li > a"), $(".main-nav"));
    height_line(mobile_nav, $(".main-nav"));
    
    mobile_nav.css({
        "width": $(".main-nav").height() + "px"
    });
    
    // Transpaner menu
    
    if ($(".main-nav").hasClass("transparent")){
       $(".main-nav").addClass("js-transparent"); 
    }
    
    $(window).scroll(function(){        
        
            if ($(window).scrollTop() > 10) {
                $(".js-transparent").removeClass("transparent");
                $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height");
            }
            else {
                $(".js-transparent").addClass("transparent");
                $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height");
            }
        
        
    });
    
    // Mobile menu toggle
    
    mobile_nav.click(function(){
    
        if (desktop_nav.hasClass("js-opened")) {
            desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
            $(this).removeClass("active");
        }
        else {
            desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
            $(this).addClass("active");
        }
        
    });
    
    desktop_nav.find("a:not(.mn-has-sub)").click(function(){
        if (mobile_nav.hasClass("active")) {
            desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
            mobile_nav.removeClass("active");
        }
    });
    
    
    // Sub menu
    
    
    var mnHasSub = $(".mn-has-sub");
    var mnThisLi;
    
    $(".mobile-on .mn-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down");
    
    mnHasSub.click(function(){
    
        if ($(".main-nav").hasClass("mobile-on")) {
            mnThisLi = $(this).parent("li:first");
            if (mnThisLi.hasClass("js-opened")) {
                mnThisLi.find(".mn-sub:first").slideUp(function(){
                    mnThisLi.removeClass("js-opened");
                    mnThisLi.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
                });
            }
            else {
                $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
                mnThisLi.addClass("js-opened");
                mnThisLi.find(".mn-sub:first").slideDown();
            }
            
            return false;
        }
        else {
            return false;
        }
        
    });
    
    mnThisLi = mnHasSub.parent("li");
    mnThisLi.hover(function(){
    
        if (!($(".main-nav").hasClass("mobile-on"))) {
        
            $(this).find(".mn-sub:first").stop(true, true).fadeIn("slow", "easeOutQuart").css({
                transform: 'translateY(0)'
            });
        }
        
    }, function(){
    
        if (!($(".main-nav").hasClass("mobile-on"))) {
        
            $(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast", "easeOutExpo").css({
                transform: 'translateY(5%)',
                transition: 'transform 0.3s ease'
            });
        }
        
    });
    
}

/* ---------------------------------------------
 Lightboxes
 --------------------------------------------- */

function init_lightbox(){

    // Works Item Lightbox              
    $(".work-lightbox-link").magnificPopup({
        gallery: {
            enabled: true
        },
        mainClass: "mfp-fade",
        zoom: {
            enabled: true,
            duration: 700
        }
    });
    $(".lightbox").magnificPopup();
    
}
/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */

// Projects filtering
var fselector = 0;
var work_grid = $("#drop-works-grid");

function initWorkFilter(){
     var isotope_mode;
     if (work_grid.hasClass("masonry")){
         isotope_mode = "masonry";
     } else{
         isotope_mode = "fitRows";
     }
     work_grid.imagesLoaded(function(){
            work_grid.isotope({
                itemSelector: '.drop-work-item',
                layoutMode: isotope_mode,
                filter: fselector
            });
        });
        
        $(".drop-portfolio-filter > li > a").click(function(){
            $(".drop-portfolio-filter > li > a").removeClass("active");
            $(this).addClass("active");
            fselector = $(this).attr('data-filter');
            
            work_grid.isotope({
                itemSelector: '.drop-work-item',
                layoutMode: isotope_mode,
                filter: fselector
            });
            return false;
        });
}

/* ---------------------------------------------
 Masonry
 --------------------------------------------- */

function init_masonry(){    
    $(".masonry").imagesLoaded(function(){
        $(".masonry").masonry();
    });
}


})(jQuery);