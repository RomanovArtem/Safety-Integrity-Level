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

  $('#floating-block').click(function(){
   // $('#feedback').slideToggle(400);
    $('#floating-block').slideToggle(400)
  });

  var count = 1;
  $('#point1').click(function(){
    if (count == 1)
    {}
    if (count == 2){
      $('#partners2').toggle(function(){});
      count = 1;
     $('#partners1').toggle(function(){});}

    if (count == 3){
      $('#partners3').toggle(function(){});
      count = 1;
     $('#partners1').toggle(function(){});}

    if (count == 4){
      $('#partners4').toggle(function(){});
      count = 1;
      $('#partners1').toggle(function(){});}
  });

  $('#point2').click(function(){
    if (count == 2)
    {}
    if (count == 1){
      $('#partners1').toggle(function(){});
      count = 2;
     $('#partners2').toggle(function(){});}

    if (count == 3){
      $('#partners3').toggle(function(){});
      count = 2;
     $('#partners2').toggle(function(){});}

    if (count == 4){
      $('#partners4').toggle(function(){});
      count = 2;
      $('#partners2').toggle(function(){});}
  });

  $('#point3').click(function(){
    if (count == 3)
    {}
    if (count == 1){
      $('#partners1').toggle(function(){});
      count = 3;
     $('#partners3').toggle(function(){});}

    if (count == 2){
      $('#partners2').toggle(function(){});
      count = 3;
     $('#partners3').toggle(function(){});}

    if (count == 4){
      $('#partners4').toggle(function(){});
      count = 3;
      $('#partners3').toggle(function(){});}
  });

  $('#point4').click(function(){
    if (count == 4)
    {}
    if (count == 1){
      $('#partners1').toggle(function(){});
      count = 4;
     $('#partners4').toggle(function(){});}

    if (count == 2){
      $('#partners2').toggle(function(){});
      count = 4;
     $('#partners4').toggle(function(){});}

    if (count == 3){
      $('#partners3').toggle(function(){});
      count = 4;
      $('#partners4').toggle(function(){});}
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

var sliderTimer;
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,99999);
    $('.viewport,.dot').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,99999);
    });
    $('#next_slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
        sliderTimer=setInterval(nextSlide,99999);
    });
    $('#prev_slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
        sliderTimer=setInterval(nextSlide,99999);
    });
    $('.dot').click(function(){
        $('.dot.active').removeClass('active');
        $(this).addClass('active');
        var n=$('.dot').index(this);
        certainSlide(n);
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        currentSlide=0;
    }
    $('.dot.active').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$('.slidewrapper').children().size()-1;
    }
    $('.dot.active').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}

function certainSlide(n){
    var currentSlide=n;
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}


}) ;





/// изменение цвета логотипа

//1.ссылки на пункты меню
// 2.ссылки на партнеров
//3. подсввечивание активного пункта