$(function() {
  // On load, hide the gallery.
  $('#venue-gallery').hide();

  // Do not load the images until clicked.
  $('#venue-gallery-toggle').click(function() {

    // If the list is currently not displayed...
    if (!$('#venue-gallery').is(':visible')) {

      // Show it.
      $('#venue-gallery').slideDown(600);

      // Change the text here.
      $(this).html("&#9650; See Less Pictures &#9650;");

      // Check to see if the images have been loaded.
      if ($('#venue-gallery li span').length) {
        $('#venue-gallery li').each(function() {
          var span = $(this).children('span');
          $('<img src="' + span.attr('id') + '"/>').load(function() {
            span.replaceWith($(this));
          });
        });
      }
    }
    // If the list currently is displayed...
    else {
      // Hide it.
      $('#venue-gallery').slideUp(600);

      // Change the text.
      $(this).html('&#9660; Show More Pictures &#9660;');
    }
  });

  // Increase the size of the image when clicked on.
  $('ul#venue-gallery li').click(function() {
    // Append the overlay to make the content stand out.
    $('body').append('<div id="overlay"></div>');

    // Launch the overlay with content.
    slideshowHandler($(this));
  });

  // Change colors when hovering.
  $('ul#venue-gallery li img').hover(function() {
    $(this).css('border-color', 'yellow');
  },
          function() {
            $(this).css('border-color', '#fff');
          });

  /**
   * Function that will launch the slideshow image.
   * 
   * @param {object} li
   *   Jquery li tag object.
   */
  function slideshowHandler(li) {
    // Attach the content wrapper.
    $('body').append('<div class="overlay-content" id="overlay-content-slideshow">'
            + '</div>');
    
    // Once the image is loaded...
    li.children('img').clone().load(function() {
      
      // Attach the image to its wrapper.
      $(this).appendTo('#overlay-content-slideshow');
      
      // Grab the current width & height of the #content.
      var height = $('#overlay-content-slideshow img').height() + 16,
              width = $('#overlay-content-slideshow img').width() + 16,
              overage = 1;
              
      // If the image height is bigger than the window, shrink the image.
      if (height > window.innerHeight) {
        overage = window.innerHeight / height;
        height = window.innerHeight;
        width = width * overage;
      }
      // If the image width is bigger than the window, shrink the image.
      if (width > window.innerWidth) {
        overage = window.innerWidth / width;
        width = window.innerWidth;
        height = height * overage;
      }
      
      // Adjust the size of the wrapper.
      $("#overlay-content-slideshow").css({
        'top': (window.innerHeight - height) / 2 + 'px',
        'left': (window.innerWidth - width) / 2 + 'px'
      });
      
      // Adjust the size of the image.
      $("#overlay-content-slideshow img").css({
        //  'top': (window.innerHeight - height) / 2 + 'px',
        //'left': (window.innerWidth - width) / 2 + 'px',
        'height': height - 32,
        'width': width - 32
      });
    });

    // Define the left arrow.
    var left = $('<span class="slideshow-nav" id="slideshow-nav-left">&larr;</span>');
    left.click(function() {
      // Remove the current image.
      $('#overlay-content-slideshow').remove();

      // Get the previous li.
      var prev = li.prev();

      // Call the previous image if it exists.
      if (prev.length) {
        slideshowHandler(prev);
      }
      // If the previous image does not exist, then get the last one in the set.
      else {
        var wrap = li.parent('ul').children('li').last();
        slideshowHandler(wrap);
      }
    });

    // Define the right arrow.
    // Define the left arrow.
    var right = $('<span class="slideshow-nav" id="slideshow-nav-right">&rarr;</span>');
    right.click(function() {
      // Remove the current image.
      $('#overlay-content-slideshow').remove();
      // Remove the left arrow.
      $('#slideshow-nav-left').remove();
      // Remove the right arrow.
      $('#slideshow-nav-right').remove();

      // Get the next li.
      var next = li.next();

      // Call the next image if it exists.
      if (next.length) {
        slideshowHandler(next);
      }
      // If the next image does not exist, then get the first one in the set.
      else {
        var wrap = li.parent('ul').children('li').first();
        slideshowHandler(wrap);
      }
    });

    // Add the arrows.
    $('#overlay').prepend(left);
    $('#overlay').append(right);

    // Define a closing div and set it up to work.
    $('#overlay').append(window.overlayClose);

  }
});
