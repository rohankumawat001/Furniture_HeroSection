
$(document).ready(function(){
    $('.your-class').slick({
        prevArrow:'.slick-prev',
        nextArrow:'.slick-next',
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 1000,
    });
  });
