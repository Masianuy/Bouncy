(function($){
	'use strict';

	$(document).ready(function() {
	 $("a.header__scroll").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });
 
 
});

	$(document).ready(function() {
		$('.sliders__team').slick({
			dots: true,
			infinite: true,
			speed: 3000,
			arrows: false,
		});
	});

	$(document).ready(function() {
		$('.sliders__testimonials').slick({
			dots: true,
			infinite: true,
			arrows: false,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 4000,
		});
	});
	

	$(document).ready(function() {
		$('.grid__wrap').masonry({
			itemSelector: '.grid__item',
			horizontalOrder: true,
			gutter: 8,
		});
	});


	var mapElement = document.getElementById('map');
	var center = {lat: 49.0666759, lng: 33.4132776};
	var map = new google.maps.Map(mapElement, {zoom: 15, center: center});
        var icon = {
		path: 'M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375   C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96   c53,0,96,43,96,96S309,256,256,256z',
		scale: 0.1,
		fillСolor: 'blue',
		fillOpacity: 0.8
	};

	var marker = new google.maps.Marker({
    position: map.getCenter(center),
    icon: icon,
    map: map
});
})(jQuery);