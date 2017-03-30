var logs = (function () {

  //catche DOM
  var $logsBox;
  var $item;
  var $area;

  //bind events


  var init = function () {
    var $logs = $('.logs');
    if ($logs.length > 0) {
      $logsBox = $logs.find('.logs__box');
      $item = $logs.find('.logs__boxItem');
      $area = $logs.find('.logs__area');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    slicklogs();
  };

  var slicklogs = function () {
    $logsBox.waitForImages(function () {
      $logsBox.slick({
        infinite: true,
        selector: $item,
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        appendArrows: '.logs__box',
        prevArrow: '<div class="logs__prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="logs__next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
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
