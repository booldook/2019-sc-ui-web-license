$(document).ready(function(){
	
	// 상단 네비 1
	$(".mn-nav1").mouseover(function(){
		$(".sub-nav1").stop().slideUp(300);
		$(this).next().stop().slideDown(300);
		$(".mn-hover1").removeClass("mn-hover1");
		$(this).addClass("mn-hover1");
	});
	
	$(".top-nav1").mouseleave(function(){
		$(".sub-nav1").stop().slideUp(300);
		$(".mn-nav1").removeClass("mn-hover1");
	});
	
	// 상단 네비 2
	$(".nav2").mouseover(function(){
		$(".sub-nav2").stop().slideDown(300);
	});
	
	$(".nav2").mouseleave(function(){
		$(".mn-nav2").removeClass("mn-hover2");
		$(".sub-nav2").stop().slideUp(300);
	});
	
	$(".sub-nav2 ul").mouseover(function(){
		var i = $(this).index();
		$(".mn-nav2").removeClass("mn-hover2");
		$(".mn-nav2").eq(i).addClass("mn-hover2");	
	});
	
	$(".mn-nav2").mouseover(function(){
		$(".mn-nav2").removeClass("mn-hover2");
		$(this).addClass("mn-hover2");
	});
	
	// 상단 네비 3
	$(".nav3").mouseover(function(){
		$(".sub-nav3").stop().slideDown(300);
	});
	
	$(".nav3").mouseleave(function(){
		$(".mn-nav3").removeClass("mn-hover3");
		$(".sub-nav3").stop().slideUp(300);
	});

	$(".sub-nav3 ul").mouseover(function(){
		var i = $(this).index();
		$(".mn-nav3").removeClass("mn-hover3");
		$(".mn-nav3").eq(i).addClass("mn-hover3");
	});
	
	$(".mn-nav3").mouseover(function(){
		$(".mn-nav3").removeClass("mn-hover3");
		$(this).addClass("mn-hover3");
	});
	
	// 왼쪽 - 마우스오버
	/*
	$(".mn-nav").mouseover(function(){
		$(".sub-nav").stop().slideUp(300);
		$(this).next().stop().slideDown(300);
	});
	$(".lt-nav").mouseleave(function(){
		$(".lt-nav").find("ul").stop().slideUp(300);
	});
	*/
	// 왼쪽 - 클릭
	$(".mn-nav").click(function(){
		$(".sub-nav").stop().slideUp(300);
		$(this).next().stop().slideToggle(300);
	});
});



















