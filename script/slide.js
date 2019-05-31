$(document).ready(function(){
	
	// 슬라이드 가로형 1
	var now1 = 1;
	var interval1 = setInterval(ani1, 3000);
	function ani1() {
		$(".slides1").stop().animate({"left":(-720*now1)+"px"}, 500, function(){
			if(now1 == 5) {
				now1 = 1;
				$(this).css({"left":0});
			}
			else {
				now1++;
			}
		});
	}
	
	// 슬라이드 가로형 2
	var now2 = 4;
	var interval2 = setInterval(ani2, 3000);
	function ani2() {
		$(".slides2").stop().animate({"left":(-720*now2)+"px"}, 500, function(){
			if(now2 == 0) {
				now2 = 4;
				$(this).css({"left":"-3600px"});
			}
			else {
				now2--;
			}
		});
	}
	
	// 슬라이드 세로형 1
	var now3 = 1;
	var interval3 = setInterval(ani3, 3000);
	function ani3() {
		$(".slides3").stop().animate({"top":(-380*now3)+"px"}, 500, function(){
			if(now3 == 5) {
				$(this).css({"top":0});
				now3 = 1;
			}
			else {
				now3++;
			}
		});
	}
	
	// 슬라이드 세로형 2
	var now4 = 4;
	var interval4 = setInterval(ani4, 3000);
	function ani4() {
		$(".slides4").stop().animate({"top":(-380*now4)+"px"}, 500, function(){
			if(now4 == 0) {
				$(this).css({"top":"-1900px"});
				now4 = 4;
			}
			else {
				now4--;
			}
		});
	}
	
	// 슬라이드 페이드
	var now5 = 0;
	var depth5 = 10;
	var interval5 = setInterval(ani5, 3000);
	function ani5() {
		$(".slides5 > .slide").eq(now5).css({"z-index": depth5++, "opacity": 0});
		$(".slides5 > .slide").eq(now5).stop().animate({"opacity": 1}, 500, function(){
			if(now5 == 4) now5 = 0;
			else now5++;
		});
	}
	
	// 슬라이드 가로형 클릭 1
	var now6 = 0;
	$("#bt-prev").click(function(){
		if(now6 > 0) {
			now6--;
			$(".slides6").stop().animate({"left":(-720*now6)+"px"}, 500);
		}
	});
	$("#bt-next").click(function(){
		if(now6 < 4) {
			now6++;
			$(".slides6").stop().animate({"left":(-720*now6)+"px"}, 500);
		}
	});
	
	// 슬라이드 가로형 클릭 2
	var now7 = 0;
	$("#bt-prev2").click(function(){
		if(now7 == 0) {
			now7 = 4;
			$(".slides7").css({"left": "-3600px"});
		}
		else now7--;
		$(".slides7").stop().animate({"left":(-720*now7)+"px"}, 500);
	});
	$("#bt-next2").click(function(){
		if(now7 == 5) {
			now7 = 1;
			$(".slides7").css({"left": 0});
		}
		else now7++;
		$(".slides7").stop().animate({"left":(-720*now7)+"px"}, 500);
	});
	
	// 슬라이드 세로형 클릭 1
	var now8 = 0;
	$("#bt-prev3").click(function(){
		if(now8 > 0) {
			now8--;
			$(".slides8").stop().animate({"top":(-380*now8)+"px"}, 500);
		}
	});
	$("#bt-next3").click(function(){
		if(now8 < 4) {
			now8++;
			$(".slides8").stop().animate({"top":(-380*now8)+"px"}, 500);
		}
	});
	
	// 슬라이드 세로형 클릭 2
	var now9 = 0;
	$("#bt-prev4").click(function(){
		if(now9 == 0) {
			$(".slides9").css({"top":"-1900px"});
			now9 = 4;
		}
		else now9--;
		$(".slides9").stop().animate({"top":(-380*now9)+"px"}, 500);
	});
	$("#bt-next4").click(function(){
		if(now9 == 5) {
			$(".slides9").css({"top":0});
			now9 = 1;
		}
		else now9++;
		$(".slides9").stop().animate({"top":(-380*now9)+"px"}, 500);
	});
	
	// 슬라이드 페이드 클릭
	var now10 = 4;
	var depth10 = 10;
	$("#bt-prev5").click(function(){
		if(now10 == 0) now10 = 4;
		else now10--;
		$(".slides10 > .slide").eq(now10).css({"opacity":0, "z-index":depth10++});
		$(".slides10 > .slide").eq(now10).stop().animate({"opacity": 1}, 500);
	});
	$("#bt-next5").click(function(){
		if(now10 == 4) now10 = 0;
		else now10++;
		$(".slides10 > .slide").eq(now10).css({"opacity":0, "z-index":depth10++});
		$(".slides10 > .slide").eq(now10).stop().animate({"opacity": 1}, 500);
	});

	var depth11 = 10;
	$(".pager").click(function(){
		var i = $(this).index();
		$(".pager").css({"color":"#333"});
		$(this).css({"color":"orange"});
		$(".slides11 > .slide").eq(i).css({"z-index": depth11++, "opacity":0});
		$(".slides11 > .slide").eq(i).stop().animate({"opacity":1}, 500);
	});

	$(".pager2").click(function(){
		var i = $(this).index();
		$(".pager2").css({"color":"#333"});
		$(this).css({"color":"orange"});
		$(".slides12").stop().animate({"left":(-720*i)+"px"}, 500);
	});
});






























