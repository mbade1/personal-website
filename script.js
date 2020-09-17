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


// $('form').on('submit', e => {
//   e.preventDefault();

//   const name = $('#name').val().trim();
//   const email = $('#email').val().trim();
//   const phone = $('#phone').val().trim();
//   const subject = $('#name').val().trim();
//   const message = $('#message').val().trim();

//   const data = {
//     name,
//     email,
//     phone, 
//     subject, message
//   };

//   $.post('/email', data, function() {
//     console.log('Server received our data.');
//   });
//   $('#name').val('');
//   $('#email').val('');
//   $('#phone').val('');
//   $('#subject').val('');
//   $('#message').val('');
// })