var slider = (function () {

  //Catche DOM
  var $slider;
  var $slick;
  var $news;

  //binds events


  var init = function () {
    $moreInfo = $('.moreInfo');
    if ($moreInfo.length > 0) {
      $slick = $moreInfo.find('.moreInfo__slick');
      $news = $moreInfo.find('.moreInfo__news');

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
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        appendArrows: '.moreInfo__title',
        prevArrow: '<div class="moreInfo__prev">&lt;</div>',
        nextArrow: '<div class="moreInfo__next">&gt;</div>',
        dotsClass: 'moreInfo__dots',
        customPaging: function(slider, i) {
          // this example would render "tabs" with titles
          return '<button class="moreInfo__tab"></button>';
        }
      });
    });

  };

})();