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

$(".backtotop_svg").click(function() { 
    $("body,html").animate({
        scrollTop: $("body").offset().top}, 800);
});

$(".backtotop").click(function() { 
    $("body,html").animate({
        scrollTop: $("body").offset().top}, 800);
});

$(".backtotop_text").click(function() { 
    $("body,html").animate({
        scrollTop: $("body").offset().top}, 800);
});