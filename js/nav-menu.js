$(document).ready(function() {

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
});

  $('#slider').jCarouselLite({
    vertical: false,
    hoverPause:true,
    btnPrev: '#prev-img',
    btnNext: "#next-img",
    visible: 6,
    speed: 500
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