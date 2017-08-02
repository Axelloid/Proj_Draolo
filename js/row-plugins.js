/* ===================== write your custom javascript here ========================= */
(function($) {
    "use strict";

    // background image
    var pageSection = $(".bg-img, .fixed-bg, .page-section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // creativeone section 
    $(".creativeoneimage .left-icon").hover(function() {
    	$(".creativeone .left-info").addClass('animated fadeInDown');
    }, function() {
    	$(".creativeone .left-info").removeClass('animated fadeInDown');
    }); 
    $(".creativeoneimage .right-icon").hover(function() {
    	$(".creativeone .right-info").addClass('animated fadeInUp');
    }, function() {
    	$(".creativeone .right-info").removeClass('animated fadeInUp');
    });

    // contact form
    $(".drop-form button:submit").click(function(e) {
        e.preventDefault();
    });


})(jQuery);