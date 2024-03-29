// Generated by CoffeeScript 1.6.1
// usage: $('.container').snapscroll({'scrollOptions':{'axis':'y'}});
// for scrollOptions refer to https://github.com/flesler/jquery.scrollTo

import $ from 'jquery'

export const JqueryScrollSnapscroll = () =>(function($, window, document, undefined_) {
  var Plugin, defaults, pluginName;
  pluginName = "snapscroll";
  defaults = {
    botPadding: 40,
    topPadding: 40,
    scrollSpeed: 300,
    scrollEndSpeed: 100,
    scrollOptions: {'axis':'xy'}
  };
  Plugin = function(element, options) {
    this.container = $(element);
    this.options = $.extend({}, defaults, options);
    return this.init();
  };
  Plugin.prototype = {
    init: function() {
      return this.snapping();
    },
    snapping: function() {
      var $children, autoscrolling, prev_position, scroll_end_speed, scroll_speed, timer,
        _this = this;
      $children = this.container.children();
      scroll_speed = this.options.scrollSpeed;
      scroll_end_speed = this.options.scrollEndSpeed;
	  scroll_options = this.options.scrollOptions;
      prev_position = $(document).scrollTop();
      timer = null;
      autoscrolling = false;
      return $(window).off("scroll.snapscroll").on("scroll.snapscroll", function() {
        var $child, cur_position, direction;
        if (!autoscrolling) {
          cur_position = $(document).scrollTop();
          direction = _this.getDirection(prev_position, cur_position);
          $child = _this.getTargetChild($children, direction, cur_position);
          if ($child) {
            clearTimeout(timer);
            timer = setTimeout(function() {
              $(window).scrollTo($child, scroll_speed, scroll_options);
              $child.siblings(".ss-active").removeClass("ss-active");
              $child.addClass("ss-active");
              autoscrolling = true;
              return setTimeout(function() {
                prev_position = $(document).scrollTop();
                return autoscrolling = false;
              }, scroll_speed + 20);
            }, scroll_end_speed);
          }
          return prev_position = cur_position;
        }
      });
    },
    getDirection: function(a, b) {
      if (a > b) {
        return "up";
      } else {
        return "down";
      }
    },
    getTargetChild: function($children, direction, position) {
      var $target, bottom_position, fc_top, lc_bottom, options, window_height;
      options = this.options;
      window_height = $(window).height();
      bottom_position = position + window_height;
      fc_top = $children.first().offset().top;
      lc_bottom = $children.last().offset().top + window_height;
      $target = null;
      if (fc_top < position + options.topPadding) {
        $children.not(".ss-active").each(function(i) {
          var object_bot, object_top;
          object_top = $(this).offset().top;
          object_bot = object_top + $(this).height();
          if (direction === "down") {
            if (object_top < bottom_position && object_bot > position) {
              $target = $(this);
              return false;
            }
          } else {
            if (object_top < position && position < object_bot) {
              return $target = $(this);
            }
          }
        });
      }
      return $target;
    }
  };
  return $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})($, window, document);
