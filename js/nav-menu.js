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
}) ;
}) ;

/// изменение цвета логотипа

//1.ссылки на пункты меню
// 2.ссылки на партнеров
//3. подсввечивание активного пункта