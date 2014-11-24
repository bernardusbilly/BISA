$(function(){

	setSwiperHeight();

	$(window).resize(function() {
  		setSwiperHeight();
  	});
	
  	var mySwiper = $('.swiper-container').swiper({
    	//Your options here:
    	autoplay: 5000,
    	speed: 500,
    	mode:'horizontal',
    	loop: true,
    	grabCursor: true,
    	pagination: ".pagination",
    	paginationClickable: true,
    	createPagination: true,
    	resizeReInit: true
    	//etc..
  	});



})

function setSwiperHeight() {
	$('.swiper-container').width($('.intro-section').width());
	$('.swiper-container').height($('.intro-photo').height());

	$('.swiper-slide').width($('.intro-section').width());
	$('.swiper-slide').height($('.intro-section').height());
}