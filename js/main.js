var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

$(window).on('unload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function(){
    // $(this).scrollTop(0);
    $(window).scrollTop(0);
    });
    $(".home_works").click(function() {
          
        $("body,html").animate({
            scrollTop: $(".work_box").offset().top
        -125}, 800);
    });
    $(".home_contact").click(function() {
          
        $("body,html").animate({
            scrollTop: $(".footer").offset().top
        -125}, 800);
    });