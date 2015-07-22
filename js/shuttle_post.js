$(function() {
  $('button[name="submit-shuttle-form"').click(function() {
    // Hide the buttons.
    $(this).parent().children('button').remove();
    $("#shuttle-form .shuttle-guest").each(function() {
      // Declare this for later use.
      var shuttleGuest = $(this);
      console.log(shuttleGuest);
      // Submit the response.
      $.ajax({
        type: "POST",
        cache: false,
        url: 'shuttle_post.php',
        data: {'name': shuttleGuest.children('input').val(), 'shuttle': shuttleGuest.children('select').children('option:selected').text()},
        success: function (data) {
          if (data) {
          shuttleGuest.empty();
          console.log(data);
          shuttleGuest.append(data);
        }
        else {
          console.log('submit failure');
        }
        }
      });
    });
  });
});
