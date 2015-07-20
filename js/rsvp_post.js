$(function() {
  /**
   * Hide RSVP timestamps unless we're hovering.
   */
  $('a.rsvped-guest').hover(
          function() {
            var time = $(this).children('span.rsvp-timestamp');
            if (time.css('display') === 'none') {
              time.slideDown().delay(1000).slideUp();
            }
          }
  );

  /**
   * When clicking on a guest not yet RSVPed, launch a dialog box for them.
   */
  window.notRSVPedHandler = function() {
    // Create an overlay.
    $('body').append('<div id="overlay"></div>');

    // Create the dialog box.
    var box = window.getBox($(this).attr('name'), $(this).html());
    $('body').append(box);

    // Define a closing div and set it up to work.
    $('#overlay').append(window.overlayClose);
  };
  $('.not-rsvped-guest').click(window.notRSVPedHandler);

  /**
   * Get the dialog box for RSVPing.
   * 
   * @param int gid
   *   Guest identifier.
   * @param string name
   *   Formatted guest name.
   *   
   * @returns {$}
   *   Jquery HTML for the dialog box.
   */
  function getBox(gid, name) {
    // Define the response for data coming back from the RSVP.
    var rsvpResponse = function(data) {
      // If this was a success after registering another user...
      if ($('#already-rsvped').length) {
        // Remove the already registered field.
        $('#already-registered').remove();
        if (data) {
          // Put new text in.
          $('#already-rsvped').replaceWith(data);
        } else {
          // Put new text in.
          $('#already-rsvped').replaceWith('There was an error RSVPing '
                  + name + '. Contact Jeff or Lauren directly.');
        }
      }
      // If this was a success after submitting the form...
      else if ($('input#name').length) {
        // Remove the input field.
        $('input#name').remove();
        if (data) {
          // Put new text in.
          $('#rsvp-form').replaceWith(data);
        } else {
          // Put new text in.
          $('#rsvp-form').replaceWith('There was an error RSVPing '
                  + name + '. Contact Jeff or Lauren directly.');
        }
      }
      
      // Regardless if there was another user registered already, update the 
      // percentages.
      // Get the percentage RSVPed.
      $.ajax({
        type: "POST",
        cache: false,
        url: 'rsvp_percentage.php',
        data: {'percent': 'rsvped'},
        success: function (data) {
          // Update the span on success.
          $('#percent-rsvped').text(data);
        }
      });
      // Get the percentage attending.
      $.ajax({
        type: "POST",
        cache: false,
        url: 'rsvp_percentage.php',
        data: {'percent': 'attending'},
        success: function (data) {
          // Update the span on success.
          $('#percent-attending').text(data);
        }
      });
    };

    // Define the Yes button.
    var yes = $('<a id="rsvp-yes" class="rsvp-button" src="#">Will Attend</a>');
    yes.hover(function() {
      $(this).css('border-color', '#66FF66');
    }, function() {
      $(this).css('border-color', '#fff');
    });
    // Determine the function for the Yes button.
    yes.click(function() {
      // Submit the form.
      $.ajax({
        type: "POST",
        cache: false,
        url: 'rsvp_post.php',
        data: {'gid': gid, 'attending': 1},
        success: rsvpResponse
      });

      // Remove the content box.
      $('.overlay-content').remove();
      // Remove the overlay background.
      $("#overlay").remove();
    });

    // Define the No button.
    var no = $('<a id="rsvp-cancel" class="rsvp-button" src="#">Will Not Attend</a>');
    no.hover(function() {
      $(this).css('border-color', '#FF0000');
      $(this).css('cursor', 'pointer');
    }, function() {
      $(this).css('border-color', '#fff');
      $(this).css('cursor', 'default');
    });
    // Determine the function for the No button.
    no.click(function() {
      // Submit the form.
      $.ajax({
        type: "POST",
        cache: false,
        url: 'rsvp_post.php',
        data: {'gid': gid, 'attending': 0},
        success: rsvpResponse
      });

      // Remove the content box.
      $('.overlay-content').remove();
      // Remove the overlay background.
      $("#overlay").remove();
    });

    // Define the Cancel button.
    var cancel = $('<a id="rsvp-cancel" class="rsvp-button" src="#">Cancel</a>');
    cancel.hover(function() {
      $(this).css('border-color', '#FF0000');
      $(this).css('cursor', 'pointer');
    }, function() {
      $(this).css('border-color', '#fff');
      $(this).css('cursor', 'default');
    });
    // Determine the function for the cancel button.
    cancel.click(function() {
      // Remove the content box.
      $('.overlay-content').remove();
      // Remove the overlay background.
      $("#overlay").remove();
    });

    // Define the box.
    var box = $('<div class="overlay-content" id="overlay-content-rsvp">'
            + 'Are you sure you want to RSVP '
            + '<br/>'
            + '"' + name + '"?'
            + '<br/>'
            + '</div>');

    // Append the options to the box.
    box.append(yes);
    box.append(no);
    box.append(cancel);

    // Return the HTML for the box.
    return box;
  }

  // Make the getBox function available globally outside of this file so that
  // the autocomplete can use it too.
  window.getBox = getBox;
});