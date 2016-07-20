$(document).ready(function() {
    $('.block-submenu').mouseenter(function() {
        $('.submenu').slideDown(400);
    });
    $('.block-submenu').mouseleave(function() {
        $('.submenu').slideToggle(400);
    });

    $('.slider').jCarouselLite({
        vertical: false,
        hoverPause: true,
        btnPrev: '.prev-img',
        btnNext: ".next-img",
        visible: 6,
        speed: 500,
        auto: 500
    });

    $('.feedback').click(function() {
        $('.floating-block').slideToggle(400);
    });

    $(document).mouseup(function(e) {
        var container = $('.floating-block');
        if (e.target != container[0] && !container.has(e.target).length) {
            container.slideUp(400);
        }
    });

    $(document).ready(function() {
        var url = document.location.href;
        $.each($("div.header a"), function() {
            if (url == this.href) {
                $(this).addClass('current');
            };
        });
    });

    $(document).ready(function() {
        var url = document.location.href;
        $.each($("ul.left-nav-menu a"), function() {
            if (url == this.href) {
                $(this).addClass('current');
            };
        });
    });

    var slideWidth = $(window).width() * 0.204;
    var dot_counter = 0;
    $(function() {
        $('.slidewrapper').width($('.slidewrapper').children().size() * slideWidth);
        sliderTimer = setInterval(nextSlide, 3000);

        $('.viewport').hover(function() {
            clearInterval(sliderTimer);
        }, function() {
            sliderTimer = setInterval(prevSlide, 3000);
        });

        $('.next_slide').click(function() {
            clearInterval(sliderTimer);
            nextSlide();
            sliderTimer = setInterval(nextSlide, 3000);
        });

        $('.prev_slide').click(function() {
            clearInterval(sliderTimer);
            prevSlide();
            sliderTimer = setInterval(nextSlide, 3000);
        });

        $('.dot').click(function() {
            $('.dot.active').removeClass('active');
            $(this).addClass('active');
            var n = $('.dot').index(this);
            certainSlide(n);
        });
    });

    function nextSlide() {
        dot_counter++;
        var currentSlide = parseInt($('.slidewrapper').data('current'));
        currentSlide++;
        if (currentSlide >= $('.slidewrapper').children().size()) {
            $('.slidewrapper').css('left', -(currentSlide - 2) * slideWidth);
            $('.slidewrapper').append($('.slidewrapper').children().first().clone());
            $('.slidewrapper').children().first().remove();
            currentSlide--;
        }

        $('.slidewrapper').animate({
            left: -currentSlide * slideWidth
        }, 1000).data('current', currentSlide);
        $('.dot.active').removeClass('active');
        $('.dot').eq(dot_counter % $('.dot').size()).addClass('active');
    }

    function prevSlide() {
        dot_counter--;
        var currentSlide = parseInt($('.slidewrapper').data('current'));
        currentSlide--;
        if (currentSlide < 0) {
            $('.slidewrapper').css('left', -(currentSlide + 2) * slideWidth);
            $('.slidewrapper').prepend($('.slidewrapper').children().last().clone());
            $('.slidewrapper').children().last().remove();
            currentSlide++;
        }
        $('.dot.active').removeClass('active');
        $('.dot').eq(dot_counter % $('.dot').size()).addClass('active');
        $('.slidewrapper').animate({
            left: -currentSlide * slideWidth
        }, 1000).data('current', currentSlide);
    }

    function certainSlide(n) {
        var currentSlide = n;
        $('.slidewrapper').animate({
            left: -currentSlide * slideWidth
        }, 1000).data('current', currentSlide);
    }

    var flag = 0;

    $('#logo-img').mouseenter(function() {

        if (flag == 1) {
            var i = Math.round(Math.random() * 3);
            var image = document.getElementById("logo-img");
            var imgs = new Array('images/logo.png', 'images/logo2.png', 'images/logo3.png', 'images/logo4.png');
            image.src = imgs[i];
            localStorage.setItem('logo-img', imgs[i]);
            $('#logo-img').click(function() {
                localStorage.setItem('logo-img', imgs[i]);
            });
        }
        if (flag == 0) {

            flag = 1;
        }

    });

    if (localStorage.getItem('logo-img') == 'images/logo.png') {
        document.getElementById('logo-img').src = 'images/logo.png';
    }

    if (localStorage.getItem('logo-img') == 'images/logo2.png') {
        document.getElementById('logo-img').src = 'images/logo2.png';
    }
    if (localStorage.getItem('logo-img') == 'images/logo3.png') {
        document.getElementById('logo-img').src = 'images/logo3.png';
    }
    if (localStorage.getItem('logo-img') == 'images/logo4.png') {
        document.getElementById('logo-img').src = 'images/logo4.png';
    }


});