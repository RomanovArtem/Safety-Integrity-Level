$(document).ready(function() {

	$('#side-bar > ul > li > a').click(function(){
    if($(this).attr('class') != 'active')
    {
      $('#side-bar > ul > li > ul').slideDown(400);
       // $(this).next().slideToggle(400); 
      $('#side-bar > ul > li > a').removeClass('active');
      $(this).addClass('active');
    }
    else
    {
      $('#side-bar > ul > li > a').removeClass('active');
      $('#side-bar > ul > li > ul').slideDown(400);
      $(this).next().slideToggle(400); 
    }
}) ;
}) ;

/// изменение цвета логотипа