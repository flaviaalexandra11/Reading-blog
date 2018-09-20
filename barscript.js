
// Makes navbar opaque on scroll.

var nav = document.getElementById('nav');
window.onscroll = function() {
  if(window.pageYOffset > 150) {
    nav.style.background = "black";
  } else {
    nav.style.background = "rgba(13, 13, 13, 0.6)";
  }
}
