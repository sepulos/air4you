var side = (function () {

  var $sidebar;
  var $sidebarItem;
  var $sidebarBox;

  //binds events


  var init = function () {
    $sidebar = $('.sidebar');
    if ($sidebar.length > 0) {
      $sidebarItem = $sidebar.find('.sidebar__item');
      $sidebarBox = $sidebar.find('.sidebar__box');

      bindEvents();
    }

  };

  $(document).ready(function () {
    init();

  });

  var bindEvents = function () {
    sidebarClick();
  };


  var sidebarClick = function () {

    $sidebarItem.on('click', function (e) {
      e.cancelBubble = true;
      var $div = $(this).find($sidebarBox);
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

})();
