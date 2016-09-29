



// (function($) {
//   $.fn.visible = function(partial) {
//
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
//
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//   };
//
// })

// $(window).scroll(function(event) {
//
//   $(".module").each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
//
// });
//
// var win = $(window);
//
// var allMods = $(".module");
//
// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });
//
// win.scroll(function(event) {
//
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
//
// });


var slider = {

  // Not sure if keeping element collections like this
  // together is useful or not.
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },

  timing: 800,
  slideWidth: 300, // could measure this

  // In this simple example, might just move the
  // binding here to the init function
  init: function() {
    this.bindUIEvents();
  },

  bindUIEvents: function() {
    // You can either manually scroll...
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
    // ... or click a thing
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
    // What would be cool is if it had touch
    // events where you could swipe but it
    // also kinda snapped into place.
  },

  moveSlidePosition: function(event) {
    // Magic Numbers =(
    this.el.allSlides.css({
      "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
    });
  },

  handleNavClick: function(event, el) {
    event.preventDefault();
    var position = $(el).attr("href").split("-").pop();

    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);

    this.changeActiveNav(el);
  },

  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }

};

slider.init();
