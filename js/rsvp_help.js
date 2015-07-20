$(function () {
  // On load, hide the help.
  $('#rsvp-help').hide();
  
  // If the document is clicked, hide the RSVP help.
  $(document).click(function() {
    $('#rsvp-help').hide();
  });
  $(document).keyup(function(){
    $('#rsvp-help').hide();
  });
});