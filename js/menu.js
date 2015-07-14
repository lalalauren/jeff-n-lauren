$(function () {
  $('#navigation a').click(function () {
    // Remove existing active styling.
    $('.active-link').removeClass('active-link');
    
    // Add active styling to selected link.
    $(this).addClass('active-link');
  });
});