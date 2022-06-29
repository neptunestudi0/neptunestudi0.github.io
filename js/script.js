
$(function (){
  
  
  function sendEmail(e,t) {

	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "neptuneappdev@gmail.com",
		Password : "70C079B1F2F6E683EF8FD8CE34836AF10804",
		To : 'omaoma259@gmail.com',
		From : "neptuneappdev@gmail.com",
		Subject : "Info Request Neptneappdev Web",
		Body : e+'---'+t
	}).then((m)=>{
		console.log(m);
        $("#emailbox").hide();
		 $("#textarea").replaceWith("<p>Your email have been send, <span class='red'>thank you.</span></p>");
	}		
	);
	}

	$('.nav-link').on('click', function() {
		$('.active-link').removeClass('active-link');
		$(this).addClass('active-link');
		$('.hparent').removeClass('hparentdisplay');

	});
	 
	$("#drawer-menu").on('click',function(){
              $('.hparent').addClass('hparentdisplay');
	});

	$("#ebtn").on('click',function(){
           var email = $("#emailinput").val();
		   var ta = $("#textarea").val();
		   sendEmail(email,ta)
	});
	
});


function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

  function sendEmail(e,t) {
	Email.send({
		Host : "smtp.mailtrap.io",
		Username : "6c0f26177e5b13",
		Password : "e8ca13b8d011af",
		To : 'neptuneappdev@gmail.com',
		From : e,
		Subject : "Info Request Neptneappdev Web",
		Body : t
	}).then(
	  message => alert("email sent")
	);
	}