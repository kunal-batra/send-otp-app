// A Fake Contact List in JSON format
var contactNames = [{"name":"Harrietta Jurasz"},
{"name":"Trudy Goldsack"},
{"name":"Say Runnett"},
{"name":"Lou St. Aubyn"},
{"name":"Padget Priestner"},
{"name":"Fletch Flury"},
{"name":"Maison Geraghty"},
{"name":"Annice Gouldsmith"},
{"name":"Flinn Fancet"},
{"name":"Nydia Boffin"},
{"name":"Zaccaria Bebb"},
{"name":"Elvis Sidgwick"},
{"name":"Stinky Cummungs"},
{"name":"Ash Bleasby"},
{"name":"Gideon Kemsley"},
{"name":"Flynn Deere"},
{"name":"Iorgo Andreassen"},
{"name":"Lorine Gorringe"},
{"name":"Wyndham Marrington"},
{"name":"Rutledge Bordessa"}];

// declaring global variables
var otp = null;
var otpMsg = null;
var phone_no = null;
$(document).ready(function(){

	// Appending contacts from fake contacts JSON
	$.each(contactNames, function(){
		$('.list-group').append('<a href="javascript:;" class="list-group-item">'+this.name+'</a>');
	});

	// Taking user to new screen, where he/she can see contact info
	$('.list-group-item').click(function(){
		$('.list-container').hide();
		$('.info-container').show();
		var contactName = $(this).text();
		$('.contact-name').text(contactName);
	});

	// Taking user to new screen, where he/she can send the otp message
	$('#send-msg').click(function(){
		$('.info-container').hide();
		$('.otp-container').show();
		otp = Math.floor(100000 + Math.random() * 900000);
		$('#sms').val('Hi. Your OTP is : '+ otp);
		otpMsg = $('#sms').val();
		phone_no = $('.contact-no').text();
	});

	// functionalities of back buttons
	$('#back-to-list-btn').click(function(){
		$('.list-container').show();
		$('.info-container').hide();
	});

	$('#back-to-info-btn').click(function(){
		$('.info-container').show();
		$('.otp-container').hide();
	});

	// sending sms functionality
	$('#send-otp').click(function(){

		// Sending AJAX post request to send otp
		// Used MSG91 API for sending sms
		$.ajax({
			// Enter your own AuthKey after "&authkey=" in line below which you generated on msg91 app
			// You can also change the sender's name by editing in line below (after "&sender=")
			url:"https://control.msg91.com/api/sendotp.php?otp_length=6&authkey=&message="+otpMsg+"&sender=KISAAN&mobile="+phone_no+"&otp="+otp+"",
			dataType: 'jsonp',
			crossDomain: true,
			method: "POST",
			accepts: { text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
		});

		alert('OTP Sent Successfully');

		// Storing Data in Local Storage
		var otpTime = new Date($.now());
		var contact_name = $('.contact-name').text();
		var otpMsgData = [{'Name':contact_name, 'Time':otpTime, 'OTP':otp}];
		var otpMsgData_1 = {'Name':contact_name, 'Time':otpTime, 'OTP':otp};

		// if local storage already exists, then append in the already existing storage, else create a new local storage
		if (localStorage.getItem('msgDetails')) {
			var storageData = JSON.parse(localStorage.getItem('msgDetails'));
			storageData.push(otpMsgData_1);
			localStorage.setItem('msgDetails', JSON.stringify(storageData));
		}
		else {
			localStorage.setItem('msgDetails', JSON.stringify(otpMsgData));
		}

	});
});