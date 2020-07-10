$(document).ready(function(){
    $(".mobile-fadein").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 1000) {
            $(".mobile-fadein").fadeIn("fast");
        } else { //それ意外は
            $(".mobile-fadein").fadeOut("fast");
        }

        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $(".hosting").innerHeight();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $(".mobile-fadein").css({
                "visibility":"hidden"
            });
        }else {
            $(".mobile-fadein").css({
                "visibility":"visible"
            });
        }
    });
});