var side = (function () {

  //catche DOM
  var $sidebar = $('.sidebar');
  var $sidebarItem = $sidebar.find('.sidebar__item');
  var $sidebarBox = $sidebar.find('.sidebar__box');

  //bind events

  var sidebarClick = function () {

    $sidebarItem.on('click', function (e) {
      e.cancelBubble = true;
      $div = $(this).find($sidebarBox);
      $div.finish().slideToggle(500);
      $sidebarBox.not($div).hide(500);
      noBubble();
      return false;

    });
  };

  var stopBubble = function(e) {
    if (!e) {
      e = window.event;
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  var noBubble = function() {
    for (var i = 0; i<$sidebarBox.length;i++) {

      $sidebarBox[i].on('click', function (e) {
        stopBubble(e);
        hideBox();

      });
    }
  };

  var hideBox = function () {
    $sidebarBox.hide(500);
  };



  var init = function () {
    sidebarClick();

  };

  $(document).ready(function () {
    init();
  });

  return {
    init : init
  }

})();
