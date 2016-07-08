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

  $('#point1').click(function(){
      $('#active').toggle(function(){});
      $('#partners1').fadeIn(1000)
     // $('#partners1').toggle('#partners1  ', {direction: "right"},100)
     //$('#partners1').toggle(function(){});
});

/* onload = function ()
{
for (var lnk = document.links, j = 0; j < lnk.length; j++)
if (lnk [j].href == document.URL) lnk [j].style.cssText = 'color:black;text-decoration:none; border:1px solid #000';
}*/

$(document).ready(function() { 
      var url=document.location.href;
 
       $.each($("div#header a"),function(e){
    if(url==this.href){$(this).addClass('active');};
  });
});
$(document).ready(function() { 
      var url=document.location.href;
 
       $.each($("div#side-bar a"),function(e){
    if(url==this.href){$(this).addClass('active');};
  });
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