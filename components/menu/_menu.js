var menu = (function () {

  //catche DOM
  var $menu;
  var $nav;
  var $bars;
  var $item;
  var $sub;
  var $subMenu;
  var $sub2;
  var $level;
  var $level2;
  var $plus;

  //bind events

  var init = function () {
    $menu = $('.menu');
    if ($menu.length > 0) {
      $nav = $menu.find('.menu__nav');
      $bars = $menu.find('.menu__bars');
      $item = $menu.find('.menu__navItem');
      $sub = $menu.find('.menu__sub');
      $subMenu = $menu.find('.menu__subMenu');
      $sub2 = $menu.find('.menu__sub2');
      $level = $menu.find('.menu__level');
      $level2 = $menu.find('.menu__level2');
      $plus = $menu.find('.menu__plus');

      bindEvents();
      // scroll();
      menuDisplay();
      subb();
      subbMenu();
      subb2();
      plus();
    }
  };

  var subbMenu = function () {
    $item.hover(function () {
      $(this).find($subMenu).stop().slideToggle(1000);
    })
  };

  var plus = function () {
    $plus.on('click', function () {
      $(this).find($level).stop().slideToggle(1000);
    })
  };

  var subb = function () {
    $sub.hover(function () {
      $(this).find($level).stop().slideToggle(1000);
    })
  };

  var subb2 = function () {
    $sub2.hover(function () {
      $(this).find($level2).stop().slideToggle(1000);
    })
  };



  $(document).ready(function () {
    init();
  });


  var bindEvents = function () {
    menuClick();
  };

  var menuDisplay = function () {
    $( window ).resize(function () {
      menuResize();
    });
  };

  var scroll = function () {
    $menu.sticky({topSpacing:0, zIndex:10});
  };

  var menuResize = function () {
    if ($( window ).width() >= 812) {
      $nav.show();
      $bars.hide();
    }
    else {
      $nav.hide();
      $bars.show();
    }
  };

  var menuClick = function () {

    $bars.on('click', function () {
      menuToggle();
    });

  };

  var menuToggle = function () {
    $nav.slideToggle(300);
  };


})();