<?php

// Allow access.
$access = 'access_lock';

// Require the config file.
require_once 'config.php';

// Do not continue processing if we are not connected to the database.
if (!$connect) {
  header("location:index#rsvp");
  die();
}

// Setup results to be collected.
$results = array();

// Do not continue if we did not fetch the name parameter as we need to match
// our results based on that.
if (!isset($_GET['name'])) {
  header("location:index#rsvp");
  die();
}
// Get the name.
$name = trim($_GET['name']);

// Query based on the name.
$query = mysql_query(
        "SELECT guests.gid, title, firstname, lastname, suffix"
        . " FROM guests"
        . " LEFT JOIN rsvped ON guests.gid = rsvped.gid"
        . " WHERE (lastname LIKE '%$name%'"
        . " OR firstname LIKE '%$name%')"
        . " AND ISNULL(attending)");

// Fetch every result and add it to the results array.
while ($result = mysql_fetch_array($query)) {
  $results[] = $result;
}

// Convert the results into JSON.
echo json_encode($results);
