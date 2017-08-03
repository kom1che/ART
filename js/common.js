$(document).ready(function() {
	
	$(".top-text h1").animated("fadeInDown", "fadeOutUp");

	$(".top-text p, .section-header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	function heightDetection(){
		$(".main_head").css("height", $(window).height());
	};

	function menuClosing(){
		$(".burger-menu").removeClass("burger-menu-clicked");
		$(".burger-menu").addClass("burger-menu-closing");
	};

	heightDetection();

	$(window).resize(function(){
		heightDetection();
	});

	$(".burger-menu").on("click", function() {
	  if ($(this).hasClass("burger-menu-clicked")) {
	    $(this).removeClass("burger-menu-clicked");
	    $(".top-text").removeClass(".h_opacify");
	    $(".top-mnu").fadeOut(600);
	    $(".top-mnu li a").removeClass("fadeInUp animated");
	    $(this).addClass("burger-menu-closing");
	  } else {
	    $(this).addClass("burger-menu-clicked");
	    $(".top-text").addClass(".h_opacify");
	    $(".top-mnu").fadeIn(600);
	    $(".top-mnu li a").addClass("fadeInUp animated");
	    $(this).removeClass("burger-menu-closing");
	  }
	});

	$(".top-mnu ul a").click(function(){
		$(".top-mnu").fadeOut(600);
		menuClosing();
	}).append("<span>");

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
