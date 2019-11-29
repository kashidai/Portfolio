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
});








