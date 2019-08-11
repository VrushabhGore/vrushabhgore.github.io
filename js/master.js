jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
	var swiper = new Swiper('.blog-slider', {
		spaceBetween: 30,
		effect: 'fade',
		loop: true,
		mousewheel: {
		  invert: false,
		},
		// autoHeight: true,
		pagination: {
		  el: '.blog-slider__pagination',
		  clickable: true,
		}
	  });
});
