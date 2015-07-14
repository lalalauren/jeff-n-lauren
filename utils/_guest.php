<?php

/**
 * Gets the loaded guest object by the gid.
 * @param type $gid
 * @return type
 */
function get_guest($gid) {
  // Strip characters.
  $gid = check_plain($gid);

  // Query.
  $query = mysql_query(
          "SELECT * "
          . "FROM guests "
          . "WHERE gid = '$gid'");

  // Fetch and return the first result.
  return mysql_fetch_array($query);
}

/**
 * Get the array of the "other guest" when given one gid.
 * 
 * @param int $first_gid
 *   Guest identifier of known guest.
 * 
 * @return array
 *   Guest array of "other guest" in connected RSVP.
 */
function get_other_guest($first_gid) {
  // Query.
  $query = mysql_query(
          'SELECT gid,title,firstname,lastname,suffix FROM couples'
          . ' INNER JOIN guests on gid1=gid'
          . ' WHERE gid2=' . check_plain($first_gid));
  
  // Fetch the result.
  $result = mysql_fetch_array($query);
  
  if (!$result) {
    // Query.
    $query = mysql_query(
          'SELECT gid,title,firstname,lastname,suffix FROM couples'
          . ' INNER JOIN guests on gid2=gid'
          . ' WHERE gid1=' . check_plain($first_gid));
  
    // Fetch the result.
    $result = mysql_fetch_array($query);
  }
  
  // Return the result.
  return $result;
}

/**
 * Returns the guests name from an array.
 * 
 * @param array $guest_array
 *   Array object containing guest data.
 * 
 * @return string
 *   Name of guest.
 */
function to_guest_name($guest_array) {
  return check_plain($guest_array['title'])
          . ' '
          . check_plain($guest_array['firstname'])
          . ' '
          . check_plain($guest_array['lastname'])
          . (
          isset($guest_array['suffix']) && strlen($guest_array['suffix']) ?
                  ' ' . check_plain($guest_array['suffix']) : NULL
          );
}