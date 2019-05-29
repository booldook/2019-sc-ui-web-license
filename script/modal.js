$(document).ready(function(){
	$(".tabs td").click(function(){
		$(".modal").stop().fadeIn(500);
	});
	$(".bt-close").click(function(){
		$(".modal").stop().fadeOut(500);
	});
	
	$("#tab-bt1").click(function(){
		$(".tab-bt").removeClass("tab-hover");
		$(this).addClass("tab-hover");
		$("#tab-cont1").show();
		$("#tab-cont2").hide();
	});
	$("#tab-bt2").click(function(){
		$(".tab-bt").removeClass("tab-hover");
		$(this).addClass("tab-hover");
		$("#tab-cont1").hide();
		$("#tab-cont2").show();
	});
});







