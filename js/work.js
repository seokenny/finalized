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
  $("html, body").animate({scrollTop: 0}, 700);
 });

$(".backtotop_svg").click(function() { 
  $("html, body").animate({scrollTop: 0}, 700);
});

$(".backtotop").click(function() { 
  $("html, body").animate({scrollTop: 0}, 700);
});

$(".backtotop_text").click(function() { 
  $("html, body").animate({scrollTop: 0}, 700);
});