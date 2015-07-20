<?php

// Allow access.
$access = 'access_lock';

// Require the config file.
require_once 'config.php';
// Include the libraries.
foreach (glob('utils/*.php') as $util) {
  include_once $util;
}

// Do not continue processing if we are not connected to the database.
if (!$connect) {
  header("location:index#rsvp");
  die();
}

// RSVP someone.
$gid = check_plain($_REQUEST['gid']);
$attending = check_plain($_REQUEST['attending']);

// If this is not a valid gid, do not return a succecss.
if (!get_guest($gid)) {
  return FALSE;
}

// Create the SQL.
$ip = getIP();
$time = time();
$sql = "INSERT INTO rsvped (gid, attending, ip, timestamp)
VALUES ('" . $gid . "', '" . $attending . "', '" . $ip . "', '" . $time . "')";

// Insert the RSVP.
if (mysql_query($sql)) {
  // Get guest.
  $guest = get_guest($gid);
  
  // Add a wrapper.
  echo '<div id="already-rsvped">';
  
  // Output guest.
  echo 'You have just RSVPed ' . to_guest_name($guest) . '!<br/>';
  
  // If there's other guests linked to this guest, inquire about them.
  if (($other_guest = get_other_guest($gid))) {
    // If they're NOT already RSVPed....
    if (!is_rsvped($other_guest['gid'])) {
      echo ' Did you want to RSVP '
      . '<a class="not-rsvped-guest" name="' . $other_guest['gid'] . '">'
      . to_guest_name($other_guest)
      . '</a>'
      . ' too?';
      echo '<script>$(".not-rsvped-guest").on("click", window.notRSVPedHandler);</script>';
    }
    // If the other guest has already RSVPed...
    else {
      echo 'You have already RSVPed '
      . to_guest_name($other_guest) . ' previously.';
    }
    // Include a newline if there's other guests.
    echo '<br/>';
  }
  
  // Regardless if there is another linked guest, ask if they want to RSVP
  // someone else.
  echo '<a class="open-rsvp-form">Click here</a> to RSVP a different guest.';
  echo '<script>$(".open-rsvp-form").on("click", function () {'
      . '$("#already-rsvped").empty();'
      . '$("#already-rsvped").append(window.rsvpForm);'
      . 'window.rsvpForm.autocomplete(window.rsvpAutocompleteHandler);'
      . '});</script>';
  
  // Close the wrapper.
  echo '</div>';
  
}
// If there was no result for RSVPing this guest, return FALSE.
else {
  return FALSE;
}
