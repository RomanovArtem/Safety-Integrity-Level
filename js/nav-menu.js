$(document).ready(function() {

	$('#side-bar > ul > li > a').mouseover(function(){
    
       // alert("!!!!!!!!!!");
         if($(this).attr('class') != 'active')
         {
        $('#side-bar > ul > li > ul').slideDown(400);
        $(this).next().slideToggle(400); 
        $('#side-bar > ul > li > a').removeClass('active');
        $(this).addClass('active');
      }
        else
        {
            $('#side-bar > ul > li > a').removeClass('active');
            $('#side-bar > ul > li > ul').slideDown(400);
        }

}) ;
}) ;

//}); старый торг, сквер с фонтаном и желтое здание , 