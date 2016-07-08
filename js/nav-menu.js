$(document).ready(function() {
    $('.low-voltage-systems').click(function() {
        if($('.low-voltage-systems').attr('class') != 'active') {
            $('.side-bar > ul > li > ul').slideDown(400);
            $('.low-voltage-systems').removeClass('active');
            $(this).addClass('active');
        } else {
            $('.side-bar > ul > li > ul').removeClass('active');
            $('.low-voltage-systems').slideDown(400);
            $('.side-bar > ul > li > ul').slideToggle(400);
        }
    });

    $('.slider').jCarouselLite({
        vertical: false,
        hoverPause: true,
        btnPrev: '#prev-img',
        btnNext: "#next-img",
        visible: 6,
        speed: 500
    });

    $('.feedback').click(function() {
        $('.floating-block').slideToggle(400);
    });

    $('.floating-block').click(function() {
        $('.floating-block').slideToggle(400)
    });
});