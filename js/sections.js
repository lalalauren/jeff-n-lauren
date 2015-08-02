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
    arrows: true,
    responsive: [
          {
      breakpoint: 2000,
      settings: {
        centerPadding: '10em',
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '0em',
        arrows: false
      }
    }
    ]
  });
});