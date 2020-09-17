$("#about-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 1000);
});

$("#projects-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
  }, 1200);
});

$("#stacks-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#stacks").offset().top
  }, 2000);
});

$("#blog-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#blog").offset().top
  }, 2000);
});

$("#contact-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 2000);
});
