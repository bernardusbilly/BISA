const INSTAGRAM_MAX_PHOTOS = 20;
const IMAGE_PER_CAROUSEL = 4;

function instagramParse(data) {
	for (var i=0; i<INSTAGRAM_MAX_PHOTOS; i++) {
		if (i%IMAGE_PER_CAROUSEL == 0) {
			$(".carousel-inner").append("<div class='item'>\
				<div class='row' id='photo-block" + i/IMAGE_PER_CAROUSEL +"'>\
				<img src='" + data.data[i].images.thumbnail.url + "' class='col-lg-3 col-md-4 col-sm-12 col-xs-12' data-toggle='modal' data-target='#photo-modal'>\
				</div>\
				</div>");
			/*$(".carousel-inner").append("<div class='row' id='photo-block" + i/IMAGE_PER_CAROUSEL +"'>");
			$(".carousel-inner").append("<img src='" + data.data[i].images.thumbnail.url + "' class='col-lg-3 col-md-4 col-sm-12 col-xs-12' data-toggle='modal' data-target='#photo-modal'>");
			$(".carousel-inner").append("</div>");
			$(".carousel-inner").append("</div>");	*/
			if (Math.floor(i/IMAGE_PER_CAROUSEL) == 0) {
				$(".item").addClass("active");
			}
		}
		else {
			$("#photo-block" + Math.floor(i/IMAGE_PER_CAROUSEL)).append("<img src='" + data.data[i].images.standard_resolution.url + "' class='col-lg-3 col-md-4 col-sm-12 col-xs-12' data-toggle='modal' data-target='#photo-modal'>");
		}
	}
}
	/*$.ajax({
		method: "GET",
		url: "https://api.instagram.com/v1/users/1509666290/media/recent/?client_id=5a606d8974c24bec9010963fd5b1c53d",
		datatype: "jsonp",
		success: function(data) {
			alert(data)
		}
	});*/