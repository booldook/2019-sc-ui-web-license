$(document).ready(function(){
		
		$(".navi").mouseover(function(){
				$(this).find(".navi-sub").stop().slideDown(200);
		});
		$(".navi").mouseleave(function(){
				$(this).find(".navi-sub").stop().slideUp(200);
		});
		
		var interval = setInterval(ani, 3000);
		function ani() {
				$(".bans").stop().animate({"left":"-=960px"}, 500, function(){
						if($(this).position().left <= -2880) {
								$(this).css("left", 0);
						}
				})
		}
});







