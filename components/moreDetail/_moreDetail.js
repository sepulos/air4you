var moreDetail = (function () {

  //catche DOM
  var $moreDetail;
  var $box;

  //bind events


  var init = function () {
    $moreDetail= $('.moreDetail');
    if ($moreDetail.length > 0) {
      $box = $moreDetail.find('.moreDetail__small');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    lightBox();
  };


  var lightBox = function () {
    $box.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

})();
