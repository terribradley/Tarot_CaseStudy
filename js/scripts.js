$("document").ready(function() {
	$(".intro-link").click(function(){

		$("html, body").animate({
			scrollTop: $("#overview").offset().top
		}, 2000);
	});
	$(".context-link").click(function(){

		$("html, body").animate({
			scrollTop: $("#context").offset().top
		}, 2000);
	});
	$(".process-link").click(function(){

		$("html, body").animate({
			scrollTop: $("#process").offset().top
		}, 2000);
	});
	$(".solution-link").click(function(){

		$("html, body").animate({
			scrollTop: $("#solution").offset().top
		}, 2000);
	});
	$(".result-link").click(function(){

		$("html, body").animate({
			scrollTop: $("#result").offset().top
		}, 2000);
	});

	// $(".headline").scrollPath({
	// 	drawPath: true,
	// 	wrapAround: true,
	// 	scrollBar: false
	// });
});
