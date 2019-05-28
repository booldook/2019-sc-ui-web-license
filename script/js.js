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
	
	
	$(".tops4 .navs").mouseover(function(){
		$(this).find(".nav-sub").stop().slideDown(300);
	});
	
	$(".tops4 .navs").mouseleave(function(){
		$(this).find(".nav-sub").stop().slideUp(300);
	});

	$(".tops4 .nav-sub > div > ul").mouseover(function(){
		var i = $(this).index();
		$(".tops4 .nav").css({"background-color": "orange", "color": "#333"});
		$(".tops4 .nav").eq(i).css({"background-color": "red", "color": "white"});
	});
	
	$(".tops4 .nav-sub > div > ul").mouseleave(function(){
		$(".tops4 .nav").css({"background-color": "orange", "color": "#333"});
	});
	
	// 왼쪽1
	/*
	$(".lt1 .nav").mouseover(function(){
		$(".lt1 .nav").find("ul").stop().slideUp(300);
		$(this).find("ul").stop().slideDown(300);
	});
	$(".lt1 .nav").mouseleave(function(){
		$(".lt1 .nav").find("ul").stop().slideUp(300);
	});
	$(".lt1 .nav").click(function(){
		$(".lt1 .nav").find("ul").stop().slideUp(300);
		$(this).find("ul").stop().slideDown(300);
	});
	*/
	$(".lt1 .nav").click(function(){
		$(this).find("ul").stop().slideToggle(300);
	});
	
	
	
});



















