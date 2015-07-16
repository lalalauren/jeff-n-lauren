$(function() {
  // When the slides switch (perhaps from swiping), make sure the link updates.
  $('#section-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    
    // Remove existing active styling.
    $('.active-link').removeClass('active-link');

    // Add active styling to targeted link.
    $('#navigation a').eq(nextSlide).addClass('active-link');

  });
  
  // Create the carousel.
  $('#section-slides').slick({
    dots: false,
    centerMode: true,
    centerPadding: '10em',
    arrows: false
  });
});