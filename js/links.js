$(function() {
  
  // When clicking on an element that has the nav-link class, allow movement
  // through the site.
  $('.nav-link').click(function() {

    // Get the target link.
    var link = $(this).attr('name');
    // Get the target navigation item.
    var navElem = $('#navigation a[name=' + link + ']');

    // Only continue if the link is valid.
    if (navElem.length) {

      // Remove existing active styling.
      $('.active-link').removeClass('active-link');

      // Add active styling to targeted link.
      navElem.addClass('active-link');

      // Move the carousel to the target slide.
      $('#section-slides').slick("getSlick").slickGoTo(navElem.index());
    }

  });
  
});
