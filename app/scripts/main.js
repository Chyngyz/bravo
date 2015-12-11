$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['home', 'pub', 'restaurant', 'nightclub', 'contact'],
		navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Главная', 'Пивной паб', 'Ресторан', 'Диско-клуб', 'Контакты'],
        showActiveTooltip: true,
        responsiveWidth: 768,
		css3: true
	});

	$('#book-form-link, #book-form-link2').magnificPopup({
	  type:'inline',
	  midClick: true
	});

	$('#book-corp-link, #book-corp-link2').magnificPopup({
	  type:'inline',
	  midClick: true
	});

	$("#inputTel, #inputTel2").mask("+996 (###) ## ## ##");

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

	$("#formCorp").submit(function() {
		$.ajax({
			type: "POST",
			url: "mailCorp.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

	$('#mobile-menu').click(function(){
		$(this).toggleClass('open');

	})
});