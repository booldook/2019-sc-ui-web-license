$(document).ready(function(){
	
	// 상단 - 개별 네비
	$(".tops2 .nav").mouseover(function(){
		$(".tops2 .nav ul").stop().slideUp(300);
		$(this).find("ul").stop().slideDown(300);
	});
	
	$(".tops2 .nav").mouseleave(function(){
		$(".tops2 .nav ul").stop().slideUp(300);
	});
	
	// 상단 - 전체 네비
	$(".tops3 .navs").mouseover(function(){
		$(this).find(".nav-sub").stop().slideDown(300);
	});
	
	$(".tops3 .navs").mouseleave(function(){
		$(this).find(".nav-sub").stop().slideUp(300);
	});

	$(".tops3 .nav-sub ul").mouseover(function(){
		var i = $(this).index();
		$(".tops3 .nav").css({"background-color": "orange", "color": "#333"});
		$(".tops3 .nav").eq(i).css({"background-color": "red", "color": "white"});
	});
	
	$(".tops3 .nav-sub ul").mouseleave(function(){
		$(".tops3 .nav").css({"background-color": "orange", "color": "#333"});
	});
});



















