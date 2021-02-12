
$(function (){
  
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
	});
	
});


function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }