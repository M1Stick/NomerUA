$(document).ready(function(){
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: Infinity,
        autoplaySpeed: 2500,
        adaptiveHeight: true
      });
  });
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'), 
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $('#up').click(function() {  
        $('body,html').animate({scrollTop:0},1000); 
      })  
});