$("document").ready(function() {
				$(".corner").click(function(){

					$("html, body").animate({
						scrollTop: $("#overview").offset().top
					}, 2000);
				 });

         $(".headline").scrollPath({
             drawPath: true,
             wrapAround: true,
             scrollBar: false
         });
