var slider = (function () {

  //Catche DOM
  var $slider;
  var $slick;
  var $news;

  //binds events


  var init = function () {
    $slider = $('.slider');
    if ($slider.length > 0) {
      $slick = $slider.find('.slider__slick');
      $news = $slider.find('.slider__news');

      slickInfo();

    }

  };

  $(document).ready(function () {
    init();

  });

  var slickInfo = function () {

    $slick.waitForImages(function () {
      $slick.slick({
        infinite: true,
        selector: $news,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        appendArrows: '.slider__title',
        prevArrow: '<div class="slider__prev"><i class="fa fa-chevron-left" aria-hidden="true"></div>',
        nextArrow: '<div class="slider__next"><i class="fa fa-chevron-right" aria-hidden="true"></div>',
        dotsClass: 'slider__dots',
        customPaging: function(slider, i) {
          // this example would render "tabs" with titles
          return '<button class="slider__tab"></button>';
        },
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
              arrows: false
            }
          }
          ]
      });
    });

  };

})();