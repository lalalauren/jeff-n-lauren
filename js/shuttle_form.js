$(function() {

  // Declare a form for the Shuttle.
  var shuttleGuest = $('<div class="shuttle-guest-input"></div>');
  var shuttleInput = $('<input type="text" name="shuttle-name" id="shuttle-name" class="shuttle-input" autocomplete="off" placeholder="Enter your name...">');
  shuttleInput.autocomplete(window.shuttleAutocompleteHandler);
  var shuttleLine = $('<span> will be using the shuttle </span>');
  var shuttleOption = $('<select name="shuttle-option">'
          + '<option value="0">to the venue</option>'
          + '<option value="1">from the venue</option>'
          + '<option value="2" selected>to and from the venue</option>'
          + '<option value="3">in neither direction</option>'
          + '</select>');
  var shuttleLine2 = $('<span>.</span>'); //.append('<input type="hidden" name="shuttle-status" value="1">');
  shuttleGuest.append(shuttleInput).append(shuttleLine).append(shuttleOption).append(shuttleLine2).append('<input type="hidden" name="shuttle-status" value="1">');

  var shuttleForm = $('<div id="shuttle-form"></div>');
  shuttleForm.append(shuttleGuest);
  var addGuest = $('<button type="button" name="add-shuttle-guest">Add Guest</button>');
  var submitForm = $('<button type="submit" name="submit-shuttle-form">Submit</button>');
  shuttleForm.append('<br/><br/>').append(addGuest).append(submitForm);

  // On load, replace the existing classes with the form.
  $('#shuttle-form-original').replaceWith(shuttleForm.get());

  // Declare an action for the Add Guest button on the Shuttle Form.
  window.addShuttleGuestHandler = function(e) {
    // Get a new input element.
    var clone = shuttleGuest.clone();
    // Clear the value inside the input.
    clone.children('input[type="text"]').val('');
    // Attach autocomplete functionality.
    clone.children('input[type="text"]').autocomplete(window.shuttleAutocompleteHandler);
    // Append the new item.
    $(".shuttle-guest-input").last().after(clone.get());
  };
  // Bind any existing buttons so that when clicking on the Add Guest link, add 
  // an input.
  $('button[name="add-shuttle-guest"]').click(window.addShuttleGuestHandler);

  // When clicking on the edit form button, convert all text to dropdowns.
  $('#edit-shuttle-form').click(function() {
    // Remove this text.
    $(this).parent('span').remove();

    // Add buttons to the bottom.
    $('#shuttle-form').append(addGuest).append(submitForm);

    // Replace all of the static shuttle direction text with dropdowns.
    $('.shuttle-guest-text').each(function() {
      // Get the shuttle option div.
      var option = $(this).children('.shuttle-option');

      // Get a new dropdown element.
      var select = shuttleOption.clone();
      select.children("option:selected").prop("selected", false);
      // Set the selected element to be whatever the text is.
      switch (option.text()) {
        case "to the venue":
          select.val(0);
          select.children('option').eq(0).prop("selected", true);
          break;
        case "from the venue":
          select.val(1);
          select.children('option').eq(1).prop("selected", true);
          break;
        case "to and from the venue":
          select.val(2);
          select.children('option').eq(2).prop("selected", true);
          break;
        default:
          select.val(3);
          select.children('option').eq(3).prop("selected", true);
      }

      // Replace the div with the dropdown.
      option.replaceWith(select);

      // Add the hidden value.
      $(this).append('<input type="hidden" name="shuttle-status" value="2">');

      // Update the CSS class.
      $(this).removeClass("shuttle-guest-text");
      $(this).addClass("shuttle-guest-input");

      // Append a delete command at the end.
      var deleteShuttleGuest = $('<a class="delete-shuttle-guest" title="remove">X</a>');
      // Get the guest div for scope.
      var guest = $(this);
      // If clicked, this needs to be removed.
      deleteShuttleGuest.click(function() {
        guest.children('input[type="hidden"]').replaceWith('<input type="hidden" name="shuttle-status" value="3">');
        guest.hide();
      });
      // Append this to the end.
      $(this).append(deleteShuttleGuest);
    });

    // Append the form buttons.
    addGuest.bind("click", function(event) {
      $(this).parent().children('button').remove();
      window.addShuttleGuestHandler(event);
    });
    $("#shuttle-form-old").append(addGuest);
    submitForm.bind("click", function(event) {
      $(this).parent().children('button').remove();
      window.shuttleSubmit(event);
      $('#shuttle-already-registered').remove();
    });
    $("#shuttle-form-old").append(submitForm);
  });

});
