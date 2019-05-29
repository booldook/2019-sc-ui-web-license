$(document).ready(function(){
	
	// 슬라이드 가로형 1
	var now = 1;
	var interval1 = setInterval(ani1, 3000);
	function ani1() {
		$(".slides1").stop().animate({"left":(-720*now)+"px"}, 500, function(){
			if(now == 5) {
				now = 1;
				$(this).css({"left":0});
			}
			else {
				now++;
			}
		});
	}
});