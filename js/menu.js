$(function () {
  $('#navigation a').click(function () {
    
    // Remove existing active styling.
    $('.active-link').removeClass('active-link');
    
    // Add active styling to selected link.
    $(this).addClass('active-link');
    
    // Move the carousel to the slide.
    $('#section-slides').slick("getSlick").slickGoTo($(this).index());
    
  });
});