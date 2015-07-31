$(function() {
  // Abstract the submit function.
  window.shuttleSubmit = function(e) {
    // Hide the buttons.
    $(this).parent().children('button').remove();

    // For each guest...
    $(".shuttle-guest-input").each(function() {
      // Declare this for later use.
      var shuttleGuest = $(this);
      // Get the name.
      var name = shuttleGuest.children('input[type="text"]').val();
      if (typeof name === 'undefined') {
        name = shuttleGuest.children('span.shuttle-name').text();
      }
      // Submit the response.
      $.ajax({
        type: "POST",
        cache: false,
        url: 'shuttle_post.php',
        data: {
          'name': name,
          'shuttle': shuttleGuest.children('select').children('option:selected').text(),
          'status': shuttleGuest.children('input[type="hidden"]').val()
        },
        success: function(data) {
          if (data) {
            shuttleGuest.empty();
            shuttleGuest.append(data);
            shuttleGuest.show();
          }
          else {
            console.log('submit failure');
          }
        }
      });
    });
  };

  $('button[name="submit-shuttle-form"]').click(window.shuttleSubmit);
});
