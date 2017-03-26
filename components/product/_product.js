var product = (function () {

//catche DOM
  var $product;
  var $slick;
  var $slick2;
  var $slick3;
  var $item;

  //bind events


  var init = function () {
    $product = $('.product');
    if ($product.length > 0) {
      $slick = $product.find('.product__slick');
      $slick2 = $product.find('.product__slick2');
      $slick3 = $product.find('.product__slick3');
      $item = $product.find('.product__item');

      slickInfoProducts();
      slickInfoProducts2();
      slickInfoProducts3();
      lightBox();
      lightBox2();
    }
  };

  $(document).ready(function () {
    init();
  });

  //binds events


  var slickInfoProducts = function () {

    $slick.waitForImages(function () {
      $slick.slick({
        infinite: true,
        selector: $item,
        slidesToShow: 4,
        dots: true,
        arrows: true,
        appendArrows: '.product__top',
        prevArrow: '<div class="product__prev"><i class="fa fa-chevron-left" aria-hidden="true"></div>',
        nextArrow: '<div class="product__next"><i class="fa fa-chevron-right" aria-hidden="true"></div>',
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
  var slickInfoProducts2 = function () {

    $slick2.waitForImages(function () {
      $slick2.slick({
        infinite: true,
        selector: $item,
        slidesToShow: 4,
        dots: false,
        arrows: true,
        appendArrows: '.product__arrow',
        prevArrow: '<div class="product__prev -top"><i class="fa fa-chevron-left" aria-hidden="true"></div>',
        nextArrow: '<div class="product__next -top"><i class="fa fa-chevron-right" aria-hidden="true"></div>',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  };

  var slickInfoProducts3 = function () {

    $slick3.waitForImages(function () {
      $slick3.slick({
        infinite: true,
        selector: $item,
        slidesToShow: 3,
        dots: false,
        arrows: true,
        appendArrows: '.product__arrow',
        prevArrow: '<div class="product__prev -top"><i class="fa fa-chevron-left" aria-hidden="true"></div>',
        nextArrow: '<div class="product__next -top"><i class="fa fa-chevron-right" aria-hidden="true"></div>',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  };



  var lightBox = function () {
    $slick3.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };
  var lightBox2 = function () {
    $slick2.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

})();