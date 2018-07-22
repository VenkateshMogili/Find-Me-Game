//Script by Venkatesh Mogili,N130010 Powered by AmmaNanna//
//SF-2 CSE//
$(document).ready(function(){
	$(".start").click(function(){
	$(".start").hide("slow");
	$(".logo").slideUp(3000);
	$(".task1").slideDown(3000);
	});
});
$(document).ready(function(){
	$("#submi").click(function(){
	$("#errors").slideToggle("fast");
	$("#errors").slideDown("fast");
	});
});
$(document).ready(function(){
	$("#s2").click(function(){
	$("#errors").slideToggle("fast");
	$("#errors").slideDown("fast");
	});
});