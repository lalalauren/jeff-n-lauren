$(function () {
  
  // Declare a form for the Shuttle.
  var shuttleGuest = $('<div class="shuttle-guest"></div>');
  var shuttleInput = $('<input type="text" name="shuttle-name" id="shuttle-name" class="shuttle-input" autocomplete="off" placeholder="Enter your name...">');
  shuttleInput.autocomplete(window.shuttleAutocompleteHandler);
  var shuttleLine = $('<span> will be using the shuttle </span>'
          + '<select name="shuttle-option">'
          + '<option value="0">to the venue</option>'
          + '<option value="1">from the venue</option>'
          + '<option value="2" selected>to and from the venue</option>'
          + '<option value="3">in neither direction</option>'
          + '</select>'
          + '<span>.</span>');
  shuttleGuest.append(shuttleInput).append(shuttleLine);
  
  var shuttleForm = $('<div id="shuttle-form"></div>');
  shuttleForm.append(shuttleGuest);
  shuttleForm.append('<br/><br/><button type="button" name="add-shuttle-guest">Add Guest</button><button type="submit" name="submit-shuttle-form">Submit</button>');
  
  // On load, replace the existing classes with the form.
  $('#shuttle-form-original').replaceWith(shuttleForm.get());
  
  // When clicking on the Add Guest link, add an input.
  $('button[name="add-shuttle-guest"]').click(function() {
    console.log("test");
    $(".shuttle-guest").last().after(shuttleGuest.clone().get());
  });
  
});
