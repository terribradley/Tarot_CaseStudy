$("document").ready(function() {
				$(".corner").click(function(){

					$("html, body").animate({
						scrollTop: $("#overview").offset().top
					}, 2000);
				 });
