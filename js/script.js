/*$(document).ready(function() {

	$('#low-voltage-systems').click(function(){
    if($('#low-voltage-systems').attr('class') != 'active')
    {
      $('#side-bar > ul > li > ul').slideDown(400);
       // $(this).next().slideToggle(400);
      $('#low-voltage-systems').removeClass('active');
      $(this).addClass('active');
    }
    else
    {
      $('side-bar > ul > li > ul').removeClass('active');
      $('#low-voltage-systems').slideDown(400);
      $('#side-bar > ul > li > ul').slideToggle(400);
    }
});*/

$(document).ready(function() {

$('#low-voltage-systems').click(function(){
      $('#submenu').slideDown(400);
  });
  $('#block-submenu').mouseenter(function(){
      $('#submenu').slideDown(400);
  });
  $('#block-submenu').mouseleave(function(){
      $('#submenu').slideToggle(400);
});


  $('#slider').jCarouselLite({
    vertical: false,
    hoverPause:true,
    btnPrev: '#prev-img',
    btnNext: "#next-img",
    visible: 6,
    speed: 500,
    auto: 500
  });

  $('#feedback').click(function(){
    $('#floating-block').slideToggle(400);
    //$('#feedback').slideToggle(400)
   // document.getElementById('feedback').style.height = '200px';

  });

 $(document).mouseup(function (e) {
    var container = $('#floating-block');
    if (e.target!=container[0]&&!container.has(e.target).length){
        container.slideUp(400);
    }
});



$(document).ready(function() {
      var url=document.location.href;

       $.each($("div#header a"),function(e){
    if(url==this.href){$(this).addClass('current');};
  });
});
$(document).ready(function() {
      var url=document.location.href;

       $.each($("ul#left-nav-menu a"),function(e){
    if(url==this.href){$(this).addClass('current');};
  });
});

/*jQuery('#slider').jCarouselLite({
    vertical: false,
    btnNext: '#next-img',
    btnPrev: '#prev-img',
    visible: 6,
    mouseWheel: true
  });*/


var slideWidth = $(window).width() * 0.204;

var dot_counter = 0;
    $(function () {
        $('.slidewrapper').width($('.slidewrapper').children().size() * slideWidth);
        sliderTimer = setInterval(nextSlide, 3000);
        $('.viewport').hover(function () {
            clearInterval(sliderTimer);
        }, function () {
            sliderTimer = setInterval(prevSlide, 3000);
        });
        $('#next_slide').click(function () {
            clearInterval(sliderTimer);
            nextSlide();
            sliderTimer = setInterval(nextSlide, 3000);
        });
        $('#prev_slide').click(function () {
            clearInterval(sliderTimer);
            prevSlide();
            sliderTimer = setInterval(nextSlide, 3000);
        });
        $('.dot').click(function () {
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
});





/// изменение цвета логотипа

//1.ссылки на пункты меню
// 2.ссылки на партнеров
//3. подсввечивание активного пункта