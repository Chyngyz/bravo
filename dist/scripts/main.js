$(document).ready(function(){$("#fullpage").fullpage({anchors:["home","pub","restaurant","nightclub","contact"],navigation:!0,navigationPosition:"right",navigationTooltips:["Главная","Пивной паб","Ресторан","Диско-клуб","Контакты"],showActiveTooltip:!0,responsiveWidth:768,css3:!0}),$("#book-form-link, #book-form-link2").magnificPopup({type:"inline",midClick:!0}),$("#book-corp-link, #book-corp-link2").magnificPopup({type:"inline",midClick:!0}),$("#inputTel, #inputTel2").mask("+996 (###) ## ## ##"),$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро мы с вами свяжемся."),$("#form").trigger("reset")}),!1}),$("#formCorp").submit(function(){return $.ajax({type:"POST",url:"mailCorp.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро мы с вами свяжемся."),$("#form").trigger("reset")}),!1}),$("#mobile-menu").click(function(){$(this).toggleClass("open")})});