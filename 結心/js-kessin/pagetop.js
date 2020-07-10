window.addEventListener('DOMContentLoaded', function(){
    $("#pagetop-wrap").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#pagetop-wrap").fadeIn("fast");
        } else {
            $("#pagetop-wrap").fadeOut("fast");
        }

        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("#footer").innerHeight();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pagetop-wrap").css({
                "position": "absolute",
                "bottom": footHeight + 20
            });
        } else {
            $("#pagetop-wrap").css({
                "position":"fixed",
                "bottom":20
            });
        }

    });

    $('#pagetop-wrap').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 800);
        return false;
    });
});