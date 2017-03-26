var tabs = (function () {

  //catche DOM
  var $tabs;
  var $item;
  var $box;
  var $content;

  //bind events

  var init = function () {
    $tabs = $('.tabs');
    if ($tabs.length > 0) {
      $box = $tabs.find('.tabs__box');
      $item = $tabs.find('.tabs__item');
      $content = $tabs.find('.tabs__content');

      bindEvents();
      first();

    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    clickBtn();
  };

  var clickBtn = function () {
    $item.on('click', function () {
      var $act = $(this);
      change($act);
    });
  };


  var change = function (act) {
    var numberBtn = act.data('tabs');
    var active = $tabs.find('*[data-tabs="'+ numberBtn +'"]').css("display", "block");
    act.css({
      background: "white",
      color: "black",
      borderTop: "1px solid black",
      borderRight: "1px solid black"
    });
    $content.not(active).css("display", "none");
    $item.not(active).css({
      background: "#006cff",
      color: "white",
      borderTop: "1px solid #006cff",
      borderRight: "1px solid #006cff"
    });
  };

  var first = function () {
    $tabs.find('*[data-tabs="1"]').css("display", "block");
    $box.find('*[data-tabs="1"]').css({
      background: "white",
      color: "black",
      borderTop: "1px solid black",
      borderRight: "1px solid black"
    });
  };


})();