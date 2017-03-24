var gallery = (function () {

  //catche DOM
  var $galleryBox;
  var $item;
  var $area;

  //bind events


  var init = function () {
    var $gallery = $('.gallery');
    if ($gallery.length > 0) {
      $galleryBox = $gallery.find('.gallery__box');
      $item = $gallery.find('.gallery__boxItem');
      $area = $gallery.find('.gallery__area');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    lightBox();
    slickGallery();
  };


  var lightBox = function () {
    $galleryBox.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

  var slickGallery = function () {
    $galleryBox.waitForImages(function () {
      $galleryBox.slick({
        infinite: true,
        selector: $item,
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        appendArrows: '.gallery__box',
        prevArrow: '<div class="gallery__prev">&lt;</div>',
        nextArrow: '<div class="gallery__next">&gt;</div>',
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 812,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  };
})();