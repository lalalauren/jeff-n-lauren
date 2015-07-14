<?php

// Require the config file.
require_once 'config.php';

// Do not continue processing if we are not connected to the database.
if (!$connect) {
  header("location:index#rsvp");
  die();
}

// RSVP someone.
$gid = $_REQUEST['gid'];

// If this is not a valid gid, do not return a succecss.
if (!get_guest($gid)) {
  return FALSE;
}

// Create the SQL.
$ip = getIP();
$time = time();
$sql = "INSERT INTO rsvped (gid, ip, timestamp)
VALUES ('" . $gid . "', '" . $ip . "', '" . $time . "')";

// Insert the RSVP.
if (mysql_query($sql)) {
  $guest = get_guest($gid);
  echo "Registered " 
    . to_guest_name($guest)
    . ' ' . format_rsvp_time($time) . '.';
  if (($other_guest = get_other_guest($gid))) {
    if ( !is_rsvped($other_guest['gid'])) {
    echo ' Did you want to register '
      . '<a class="unregistered-guest" name="' . $other_guest['gid'] . '">'
    . to_guest_name($other_guest) 
            . '</a>'
            . ' too?';
    }
    else {
      echo ' You have already registered ' 
      . to_guest_name($other_guest) . ' previously.'
              . ' Please contact Lauren or Jeff if you need to register another guest.';
    }
  }
} else {
  return FALSE;
}