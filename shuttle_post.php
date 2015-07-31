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
$status = check_plain($_REQUEST['status']);

// If we can determine a gid, return that.
$gid = get_gid_from_name($name);
// Get other universal values.
$ip = getIP();
$time = time();

// Depending on the current status of the guest, create/update/delete their row.
switch ($status) {
  // A new value.
  case 1:
    // Create the SQL for an INSERT statement.
    $sql = "INSERT INTO shuttle (name, gid, shuttle, ip, timestamp) VALUES ('$name', '$gid', '$shuttle', '$ip', '$time')";
    // Insert the shuttle result.
    if (mysql_query($sql)) {
      echo "$name will be using the shuttle $shuttle.";
    }
    // If there was no result for RSVPing this guest, return FALSE.
    else {
      return FALSE;
    }
    break;

  // An updated user.
  case 2:
    // Create the SQL for an UPDATE statement.
    $sql = "UPDATE shuttle SET shuttle='$shuttle' WHERE name='$name'";
    // Update the shuttle result.
    if (mysql_query($sql)) {
      echo "$name will be using the shuttle $shuttle.";
    }
    // If there was no result for RSVPing this guest, return FALSE.
    else {
      return FALSE;
    }
    break;

  // Remove the guest from the shuttle list.
  case 3:
    // Create the SQL to "delete" this entry, but since we never want to delete
    // records, just clear the shuttle status.
    $sql = "UPDATE shuttle SET name='$name - DELETED',gid=NULL WHERE name='$name'";
    // Update/"Delete" the shuttle result.
    if (mysql_query($sql)) {
      echo "$name will no longer be using the shuttle.";
    }
    // If there was no result for RSVPing this guest, return FALSE.
    else {
      return FALSE;
    }
    break;

  // If this was an unrecognized value...
  default:
    echo "Status of the guest was not recognized. Please email Lauren.";
}
