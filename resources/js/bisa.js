$(window).load(function() {
	console.log("BISA.js ready");
		
	// remove the loading screen when the page is ready
	$('#load-page').css("opacity", "0");
	$('#load-page').css("z-index", "-100");
	
	// hover effect for officer
	var names = $('#photoset-frame > img');

	$(names).each(function() {
		var tmp = $(this).attr('id');
		var name = tmp.substr(0, tmp.indexOf('-'));
		var shift_right = $(this).attr('shift');
		$(this).hasClass('photo')

		if($(this).hasClass('photo')) {
			$(this).hover(function() {
				$('#info-to-hover').css("visibility", "hidden");
				$('#' + name + '-info').css("left", shift_right+"%");
				$('#photoset-info').css("border-left", "3px solid black");
				$('#background').css("opacity", 0);
				$('#background').css("-moz-opacity", 0);
				$('#background').css("-khtml-opacity", 0);
				$('#background-bw').css("opacity", "1");
				$('#background-bw').css("-moz-opacity", 0);
				$('#background-bw').css("-khtml-opacity", 0);
			}, function() {
				$('#' + name + '-info').css("left", "-200%");
				$('#photoset-info').css("border-left", "0px");
				$('#background').css("opacity", "1");
				$('#background').css("-moz-opacity", 1);
				$('#background').css("-khtml-opacity", 1);
				$('#background-bw').css("opacity", 0);
				$('#background-bw').css("-moz-opacity", 0);
				$('#background-bw').css("-khtml-opacity", 0);
			});
		}
	});


	// when officer page is active then we temporarily hide the navigation bar
	// when we hit the bottom of the page, footer appear

	if($('#nav-officer').hasClass("active")) {
		$('.navbar-fixed-top').css("top", "-51px");
		$('#officer-header').css("top", "-2px");
	} else {
		$('.navbar-fixed-top').css("top", "0");
		$('#officer-header').css("top", "-100px");
	}

	if ($(window).scrollTop() + $(window).height() >= $(document).height() - 20) {
		$('.footer-section').css("bottom", "0px");
	} else {
		$('.footer-section').css("bottom", "-100px");
	}

	$(window).scroll(function() {
		if($('#nav-officer').hasClass("active")) {
			$('.navbar-fixed-top').css("top", "-51px");
			$('#officer-header').css("top", "-2px");
		} else {
			$('.navbar-fixed-top').css("top", "0");
			$('#officer-header').css("top", "-100px");
		}

		if ($(window).scrollTop() + $(window).height() >= $(document).height() - 20) {
			$('.footer-section').css("bottom", "0px");
		} else {
			$('.footer-section').css("bottom", "-100px");
		}

		if($(window).scrollTop() > 50) {
			$('.arrow-down').css("bottom", "-100px");	
		} else {
			$('.arrow-down').css("bottom", "0");
		};
	});
});