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
VALUES ('" . $gid . "', '" . $attending . "', '"  . $ip . "', '" . $time . "')";

// Insert the RSVP.
if (mysql_query($sql)) {
  $guest = get_guest($gid);
  echo "RSVPed " 
    . to_guest_name($guest)
    . ' ' . format_rsvp_time($time) . '.';
  if (($other_guest = get_other_guest($gid))) {
    if ( !is_rsvped($other_guest['gid'])) {
    echo ' Did you want to RSVP '
      . '<a class="not-rsvped-guest" name="' . $other_guest['gid'] . '">'
    . to_guest_name($other_guest) 
            . '</a>'
            . ' too?';
    }
    else {
      echo ' You have already RSVPed ' 
      . to_guest_name($other_guest) . ' previously.'
              . ' Please contact Lauren or Jeff if you need to R another guest.';
    }
  }
} else {
  return FALSE;
}