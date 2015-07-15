$(function() {

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
    // Get the image src.
    var src = li.children('img').attr('src');

    // Attach the content.
    $('body').append('<div class="overlay-content" id="overlay-content-slideshow">'
            + '<img src="' + src + '"/>'
            + '</div></div>');

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

    // Grab the current width & height of the #content.
    var height = $('#overlay-content-slideshow img').height() + 16,
            width = $('#overlay-content-slideshow img').width() + 16,
            overage = 1;

    console.log("original: " + height + " x " + width);
    console.log("window: " + window.innerHeight + " x " + window.innerWidth);

    if (height > window.innerHeight) {
      overage = window.innerHeight / height;
      height = window.innerHeight;
      width = width * overage;
    }
    if (width > window.innerWidth) {
      overage = window.innerWidth / width;
      width = window.innerWidth;
      height = height * overage;
    }
    console.log("reduced: " + height + " x " + width);


    $("#overlay-content-slideshow").css({
      'top': (window.innerHeight - height) / 2 + 'px',
      'left': (window.innerWidth - width) / 2 + 'px',
    });
    $("#overlay-content-slideshow img").css({
      //  'top': (window.innerHeight - height) / 2 + 'px',
      //'left': (window.innerWidth - width) / 2 + 'px',
      'height': height - 32,
      'width': width - 32
    });

  }
});