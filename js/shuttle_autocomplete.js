$(function() {
  /**
   * Autocomplete functionality for dropdown.
   */
  window.shuttleAutocompleteHandler = {
    minLength: 3,
    select: function(event, ui) {
      if (ui.item) {
        // Set the input.
        $('#name').val(ui.item.label);
      }
    },
    source: function(request, response) {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'shuttle_autocomplete.php?name=' + request.term,
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
