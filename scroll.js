$(function () {
    $('a[href^=#]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        $('.NavMenu').removeClass('open');
        $('.NavMenu').removeClass('active');
        $(".Toggle").removeClass('active');
        return false;
    });
});




