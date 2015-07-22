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

// Get the values passed in.
$name = check_plain($_REQUEST['name']);
$shuttle = check_plain($_REQUEST['shuttle']);

// If we can determine a gid, return that.
$gid = get_gid_from_name($name);

// Create the SQL.
$ip = getIP();
$time = time();
$sql = "INSERT INTO shuttle (name, gid, shuttle, ip, timestamp)
VALUES ('$name', '$gid', '$shuttle', '$ip', '$time')";

// Insert the shuttle result.
if (mysql_query($sql)) {
  echo "$name will be using the shuttle $shuttle.";
}
// If there was no result for RSVPing this guest, return FALSE.
else {
  return FALSE;
}
