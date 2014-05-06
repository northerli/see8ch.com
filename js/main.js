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
