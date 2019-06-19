
var sApp = {};


// Откуда узнали о предложении
sApp.SocialTest = function(){

	var _this = $(this);

	var data = {
		'orderId': $('#order_id_full').val(),
		'knew_from': _this.data('id')
	};

	$.ajax({
		type: "POST",
		url: "/spec",
		data: data,					
		success: function () {
			
			//$('.sourcelink_link').hide();
			$('.sourcelink_link').slideUp(100, function(){
				$('.js-sourcelink_title').html('Спасибо, мы очень ценим Ваш ответ!');
			});
		}
	});

	return false;	
}



// Сохранение email
sApp.MailSent = function(){

	if( $(this).hasClass('disabled') ){
		return false;
	}

	var control = $('.js-control-email');

	var value = $('.js-control-email').val();

	$('.mailerror').empty();

	if(value == ''){

		sApp.MailSentError('Введите адрес электронной почты');
		return false;

	} else {

		if( !/.+@.+\..+/i.test(value) ){

			sApp.MailSentError('Адрес введен не верно. Пример: \"example@example.ru\"');
			return false;

		} else {

			var data = {
				'orderId': $('#order_id_full').val(),
				'email': value 
			};

			$.ajax({
				type: "POST",
				url: "/spec",	
				data: data,
				beforeSend: sApp.MailSentDisable,
				success: sApp.MailSentSuccess
			});
		}
	}

	return false;

}


sApp.MailSentDisable = function(){
	$('.js-mail-btn').addClass("disabled");
}

// Если все ок
sApp.MailSentSuccess = function(){

	$('.js-control-email').hide();
	$('.js-mail-btn').hide();

	var Mailsuccess = $("<div/>", {
		"class": "mailsuccess",
		text: 'Спасибо!'
	});

	Mailsuccess.appendTo(".js-mail_wrap");
}

// Вывод ошибок
sApp.MailSentError = function(text){

	var Error = $("<div/>", {
		"class": "mailerror",
		text: text,
	});	
	Error.appendTo(".mail_block");
}



$(function(){
	$('.btns').on('click', sApp.SocialTest);
	$('.js-mail-btn').on('click', sApp.MailSent);
});




