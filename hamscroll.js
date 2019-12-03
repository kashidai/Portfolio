$(function () {
    $('.Toggle').click(function () {
        $('header').toggleClass('open');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.NavMenu').addClass('active');　 //クラスを付与
        } else {
            $('.NavMenu').removeClass('active'); //クラスを外す
        }
    });

    //Hamburger---------------

    $('.hamMenu a[href^="#"]').click(function() {
        var speed = 700;
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
