
// Changes images on the home page.

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4500); // Change image every 4 seconds
}

// Makes navbar opaque on scroll.

var nav = document.getElementById('nav');
window.onscroll = function() {
  if(window.pageYOffset > 150) {
    nav.style.background = "black";
  } else {
    nav.style.background = "rgba(13, 13, 13, 0.6)";
  }
}
