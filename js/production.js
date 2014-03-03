/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

// -- Set Dynamic Heights and CSS -- //
$(document).ready(function(){resizeDiv();});
  window.onresize = function(event) {resizeDiv();};
  function resizeDiv() {
      vpw = $(window).width();
      vph = $(window).height();


      // Logo Padding
      $('#home h1').css({'margin-top': vph / 2.8 + 'px'});
      $('#resume-intro').css({'padding-top': vph / 3.15 + 'px'});
      $('#resume-intro').css({'height': vph - (vph / 2.8) + 'px'});
      $('#resume-hire').css({'height': vph - (vph / 3) + 'px'});
      $('#resume-hire-btn').css({'margin-top': vph / 3 + 'px'});
      $('#resume-hire-form').css({'margin-bottom': vph / 4 + 'px'});
      $('#hire-sent h2').css({'margin-top': vph / 2.8 + 'px'});
}


// Toggle Navigation
$(document).ready(function(){
  $("#nav-open").click(function(){
    $("#nav-right").toggleClass("active");
  });
});

$(document).ready(function(){
  $("#nav-close").click(function(){
    $("#nav-right").toggleClass("active");
  });
});

$(document).ready(function(){
  $("#resume-hire-btn").click(function(){
    $("#resume-hire-form").toggleClass("active");
    //window.scrollTo(0,document.body.scrollHeight);
  });
});
