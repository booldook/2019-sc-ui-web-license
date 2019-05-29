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
});






























