$(function() {
  $('#section-slides').on('init', function(event, slick) {
    console.log('slider was initialized');
  });
  $('#section-slides').slick({
    dots: false,
    centerMode: true,
    arrows: false
  });
});