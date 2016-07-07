$(document).ready(function() {

	$('#aaa').click(function(){
    if($('#aaa').attr('class') != 'active')
    {
      $('#side-bar > ul > li > ul').slideDown(400);
       // $(this).next().slideToggle(400); 
      $('#aaa').removeClass('active');
      $(this).addClass('active');
    }
    else
    {
      $('side-bar > ul > li > ul').removeClass('active');
      $('#aaa').slideDown(400);
      $('#side-bar > ul > li > ul').slideToggle(400); 
    }
});

  $('#slider').jCarouselLite({
    vertical: false,
    hoverPause:true,
    btnPrev: '#prev-img',
    btnNext: "#next-img",
    visible: 6,
    speed: 500
  });




/*jQuery('#slider').jCarouselLite({
    vertical: false,
    btnNext: '#next-img',
    btnPrev: '#prev-img',
    visible: 6,
    mouseWheel: true
  });*/




}) ;





/// изменение цвета логотипа

//1.ссылки на пункты меню
// 2.ссылки на партнеров
//3. подсввечивание активного пункта