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
  var addGuest = $('<a class="shuttle-button" id="add-shuttle-guest"><span>+</span> Click to Add Guest...</a>');
  var submitForm = $('<div class="shuttle-button" id="submit-shuttle-form">Submit</div>');
  submitForm.hover(function() {
    $(this).css('background-color', 'rgba(255, 255, 133, 0.7');
    $(this).cursor('pointer');
  }, function() {
    $(this).css('background-color', 'rgba(255, 255, 133, 0.4');
    $(this).css('cursor', 'default');
  });
  shuttleForm.append(addGuest).append('<div class="clearfix"></div>').append(submitForm);

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
  $('#add-shuttle-guest').click(window.addShuttleGuestHandler);

  // When clicking on the edit form button, convert all text to dropdowns.
  $('#edit-shuttle-form').click(function() {
    // Remove this text.
    $('#old-shuttle-form-edit').remove();

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

    // Add the functionality to the form buttons.
    addGuest.bind("click", function(event) {
      window.addShuttleGuestHandler(event);
    });
    submitForm.bind("click", function(event) {
      $(this).parent().children('.shuttle-button').remove();
      window.shuttleSubmit(event);
      $('#shuttle-already-registered').remove();
    });

    $("#shuttle-form-old").append(addGuest).append('<div class="clearfix"></div>').append(submitForm);
  });

});
