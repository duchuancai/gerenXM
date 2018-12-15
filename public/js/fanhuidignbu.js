
    $(window).on("scroll",function() {
        if ($(window).scrollTop() > 800)
            $("div#cbl-4").show();
        else
            $("div#cbl-4").hide();
    });
    $("div#cbl-4").on("click",function() {
        $("html").animate({scrollTop: 0}, 1800);
    });
