$(function() {
  /**
   * Autocomplete functionality for dropdown.
   */
  window.rsvpAutocompleteHandler = {
    minLength: 3,
    select: function(event, ui) {
      if (ui.item) {
        // Set the input.
        $('#name').val(ui.item.label);
        
        // Create an overlay.
        $('body').append('<div id="overlay"></div>');
        
        // Define the dialog box.
        var box = window.getBox(ui.item.hidden, ui.item.label);
        $('body').append(box);

        // Define a closing div and set it up to work.
        $('#overlay').append(window.overlayClose);
      }
    },
    source: function(request, response) {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'rsvp_autocomplete.php?name=' + request.term,
        success: function(data) {
          response(
                  $.map(data, function(item) {
                    return {
                      label: item.title + " " + item.firstname + " " + item.lastname + (item.suffix === null ? "" : " " + item.suffix),
                      hidden: item.gid
                    };
                  })
                  );
        },
        error: function(request, error) {
          console.log(response);
          console.log(request);
          console.log("ERROR WITH AUTOCOMPLETE: " + error);
        }
      });
    }
  };
});
