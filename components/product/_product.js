var product = (function () {

//catche DOM
  var $product;
  var $slick;
  var $item;

  //bind events


  var init = function () {
    $product = $('.product');
    if ($product.length > 0) {
      $slick = $product.find('.product__slick');
      $item = $product.find('.product__item');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    slickInfoProducts();
  };

  //binds events


  var slickInfoProducts = function () {

    $slick.waitForImages(function () {
      $slick.slick({
        infinite: true,
        selector: $item,
        slidesToShow: 4,
        dots: true,
        arrows: true,
        appendArrows: '.product__title',
        prevArrow: '<div class="product__prev">&lt;</div>',
        nextArrow: '<div class="product__next">&gt;</div>',
        dotsClass: 'product__dots',
        customPaging: function(slider, i) {
          // this example would render "tabs" with titles
          return '<button class="product__tab"></button>';
        },
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  };

})();