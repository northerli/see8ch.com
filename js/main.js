// -- Set Dynamic Heights and CSS -- //
$(document).ready(function(){resizeDiv();});
  window.onresize = function(event) {resizeDiv();};
  function resizeDiv() {
      vpw = $(window).width();
      vph = $(window).height();

      // Logo Padding
      $('#home h1').css({'margin-top': vph / 2.8 + 'px'});
      $('#resume-intro').css({'padding-top': vph / 3.15 + 'px'});
      $('#jobs #resume-intro').css({'padding-top': vph / 6 + 'px'});
      $('#resume-intro').css({'height': vph - (vph / 2.8) + 'px'});
      $('#resume-hire').css({'height': vph - (vph / 3.5) + 'px'});
      $('#resume-hire-btn').css({'margin-top': vph / 3.5 + 'px'});
      $('#resume-hire-form').css({'margin-bottom': vph / 4 + 'px'});
      $('#hire-sent h2').css({'margin-top': vph / 2.8 + 'px'});
      $('.thanks').css({'margin-bottom': vph / 2 - 100 + 'px'});
      $('.thanks').css({'margin-top': vph / 2 + 'px'});


      // Work Images
      imgH = $('.img-wrap').width();
      $('.img-wrap').css({'height': imgH + 'px'});
      $('.work-img').css({'height': imgH + 2 + 'px'});
      $('.work-img').css({'width': imgH + 2 + 'px'});

      // Work Sort Offset
      sortH = $('#sort').height();
      $('#work .content-wrapper').css({'margin-top': sortH + 'px'});
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


// Work Sort
$("#sort .all").click(function(){
  $("#sort li").removeClass("active");
  $(this).addClass("active");
  $("article").removeClass("hidden");
});
$("#sort .design").click(function(){
  $("#sort li").removeClass("active");
  $(this).addClass("active");
  $("article").addClass("hidden");
  $("article.design").removeClass("hidden");
});
$("#sort .development").click(function(){
  $("#sort li").removeClass("active");
  $(this).addClass("active");
  $("article").addClass("hidden");
  $("article.development").removeClass("hidden");
});
$("#sort .both").click(function(){
  $("#sort li").removeClass("active");
  $(this).addClass("active");
  $("article").addClass("hidden");
  $("article.design.development").removeClass("hidden");
});

// Work Toggle
//$("#work article").click(function(){
//  $(this).toggleClass("expanded");
//});



// Disable Hover on Scroll
var body = document.body,
    timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  timer = setTimeout(function(){ body.classList.remove('disable-hover') },300);
}, false);


// Safari Only
(function($){
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('html').addClass('safari'); 
   }
})(jQuery);
