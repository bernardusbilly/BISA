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
		$('.footer-section').css("bottom", "-300px");
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
			$('.footer-section').css("bottom", "-300px");
		}

		if($(window).scrollTop() > 50) {
			$('.arrow-down').css("bottom", "-100px");	
		} else {
			$('.arrow-down').css("bottom", "0");
		};

		if ($(window).scrollTop() + $(window).height() >= 0.75 * $(document).height()) {
			$('#background-html').css("background", "url(./resources/img/bisa_2013.jpg)");
			$('#background-html').css("background-position", "center");
			$('#background-html').css("background-repeat", "no-repeat");
			$('#background-html').css("background-attachment", "fixed");
			$('#background-html').css("background-size", "cover");
			$('#background-html').css("top", "0");

		} else { 
			var x = -$(window).scrollTop()*0.05+20;
			console.log(x);
			$('#background-html').css("background", "url(./resources/img/bisa_2014.jpg)");
			$('#background-html').css("background-size", "150%");
			$('#background-html').css("background-position", "center");
			$('#background-html').css("background-repeat", "no-repeat");
			$('#background-html').css("top", x);
		}

	});

	$('.photo-instagram').click(function() {
		console.log("photo-instagram clicked.");
		var src = $(this).attr("src");
		$('.image-source').attr("src", src);
		$('.image-source').css("width", "100%");
	});
});