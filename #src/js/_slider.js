$(document).ready(function(){
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: Infinity,
        autoplaySpeed: 2500,
        adaptiveHeight: true,
        responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
      });
  });