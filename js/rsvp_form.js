$(function () {
  
  // Declare a form for the RSVP.
  window.rsvpForm = $('<input type="text" name="name" id="name" class="rsvp-input" autocomplete="off" placeholder="Enter your name...">');
  window.rsvpForm.autocomplete(window.rsvpAutocompleteHandler);
  
  // On load, replace the existing classes with the form.
  $('#rsvp-form-original').replaceWith(window.rsvpForm.get());
  
  // When clicking on the Open RSVP Form link, replace the span with the input.
  $('a.open-rsvp-form').click(function() {
    $('#rsvp-form').empty();
    $('#rsvp-form').append(window.rsvpForm.get());
    window.rsvpForm.autocomplete(window.rsvpAutocompleteHandler);
  });
  
});
