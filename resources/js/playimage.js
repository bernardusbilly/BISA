/* Playimage.js */
$(window).load(function(){
	console.log("Playimage.js Ready");

	$('.img-compound').each(function() {
		var image_lead = $(this).find("img:first");

		$(this).css("height", image_lead.height());

		var counter = 0;
		var total_image = 0;

		// setup the location for all given <img>
		$(this).find("img").each(function() {
			$(this).attr("counter", total_image);
			total_image += 1;
		});

		// first image is displayed
		image_lead.css("opacity", 1);

		// setup the transition time
		$(this).find("img").each(function() {
			$(this).css("transition", "1s");
		});

		// setup click function
		$(this).click(function() {
			images = $(this).find("img");
			
			$(this).find('img[counter='+ counter +']').css("opacity", 0);
			if (counter < total_image-1) {
				$(this).find('img[counter='+ (counter+1) +']').css("opacity", 1);
			} else if(counter == total_image-1) {
				$(this).find('img[counter=0]').css("opacity", 1);
			}
			counter += 1;
			if (counter == total_image) {
				counter = 0;
			}
		});
	});

	$('.img-layering').each(function() {

		// first image has opacity of 1
		var image_lead = $(this).find("img:first");
		image_lead.css("opacity", 1);

		var counter = 0;
		var shift_down = 30;
		var shift_right = image_lead.width()/20;

		// setup the location for all given <img>
		$(this).find("img").each(function() {
			// $(this).attr("counter", counter);
			$(this).css("left", (shift_right*counter));
			$(this).css("width", image_lead.width());
			$(this).css("height", image_lead.height());
			$(this).css("z-index", 100-counter);
			counter += 1;
		});

		// setup the border for this img-compound
		$(this).css("width", image_lead.width()+(shift_right*counter));
		$(this).css("height", image_lead.height()+shift_down);

		$(this).find("img").hover(function() {
			// remove all front layer
			$(this).parent().children().removeClass("img-layering-front");

			// reset variable
			counter = 100;
			var ctr = 1;

			// make sure the first img is not have the opacity of 1
			image_lead.css("opacity", 0.5);

			// setup the front class to the hovered img
			$(this).addClass("img-layering-front");

			// rearrange z-index for all img
			$(this).parent().children().each(function() {
				counter = counter + ctr;
				if ($(this).hasClass("img-layering-front")) {
					ctr = -1;
				}
				$(this).css("z-index", counter);
			});
		});
	});

	// need update to resize the img-compound whenever parent() is resized
	$(window).resize(function() {
		$('.img-compound').each(function() {
			var image_lead = $(this).find("img:first");
			$(this).css("height", image_lead.height());
		});
	});
});