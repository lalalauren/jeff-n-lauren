<?php

// Don't allow direct access to this php file. Do not even
if (empty($access)) {
  header('Page does not exist.', true, 404);
  exit();
}

/**
 * Turn an array of guests into a formatted string.
 * 
 * @param array $guests
 *   Array of guests.
 * 
 * @return string
 *   Formatted guest string.
 */
function format_guest_list($guests) {
  // If the count of guests is greater than two people, this should be a comma
  // separated list.
  if (count($guests) > 2) {
    $guest_str = implode(', ', $guests);
    $last_comma = strrpos($guest_str, ', ');
    return substr_replace($guest_str, ', and ', $last_comma, 2);
  }
  // If the count is greater than one but less than two people, this should
  // just have "and" in between the two values.
  elseif (count($guests) > 1) {
    return implode(' and ', $guests);
  }
  // If there is only one guest, just return that.
  elseif (count($guests) > 0) {
    return array_pop($guests);
  }
  // If there were no guests, return NULL.
  else {
    return NULL;
  }
}

/**
 * Get the guests that have already RSVPed and their other half upon page load.
 * 
 * @return array
 *   This returns a 2D array; first array is the guests, second is the other
 *   couples linked to the first set.
 */
function get_rsvp_init() {
  // Get the guests that have already been RSVPed to this address.
  $guests = array();

  // Get the other guests that are linked to these RSVPed guests.
  $other_guests = array();

  // Query every guest already RSVPed to this IP.
  $result = mysql_query('SELECT * FROM rsvped WHERE IP="' . getIP() . '"');
  while ($row = mysql_fetch_assoc($result)) {

    // Get the guest id.
    $guest = get_guest($row['gid']);

    // See if there is a guest linked to the perosn already RSVPed.
    $other_guest = get_other_guest($row['gid']);
    if ($other_guest && !is_rsvped($other_guest['gid'])) {
      $other_guests[] = '<a class="not-rsvped-guest" name="' . $other_guest['gid'] . '">'
              . to_guest_name($other_guest)
              . '</a>';
    }

    // Get the current time.
    $time = format_rsvp_time($row['timestamp']);

    // Convert the gid to a string and add the time.
    $guests[] = '<a class="rsvped-guest">'
            . to_guest_name($guest)
            . $time
            . '</a>';
  }

  // Return the array of both types of guests.
  return array($guests, $other_guests);
}

/**
 * Returns a formatted string given the time.
 * 
 * @param int $time
 *   Unix timestamp.
 * 
 * @return string
 *   Formatted string.
 */
function format_rsvp_time($time) {
  return '<span class="rsvp-timestamp"> on '
          . '<span class="rsvp-date">'
          . date('M d', $time)
          . '</span>'
          . ' at '
          . '<span class="rsvp-time">'
          . date('h:i a', $time)
          . '</span>'
          . '</span>';
}

/**
 * Determine if guest by gid is RSVPed.
 * 
 * @param int $gid
 *   Guest identifier.
 * 
 * @return boolean
 *   TRUE if the guest has RSVPed; FALSE otherwise.
 */
function is_rsvped($gid) {
  $query = mysql_query('SELECT gid FROM rsvped WHERE gid=' . check_plain($gid));
  if (mysql_fetch_array($query)) {
    return TRUE;
  }
  return FALSE;
}

/**
 * Gets number of people RSVPed.
 * 
 * @return int
 *  Number RSVPed.
 */
function get_num_rsvped() {
  $query = mysql_query('SELECT count(*) AS num FROM rsvped');
  if ($result = mysql_fetch_array($query)) {
    return $result['num'];
  }
  return 0;
}

/**
 * Gets number of people who have RSVPed and are attending.
 * 
 * @return int
 *   Number RSVPed and coming.
 */
function get_num_attending() {
  $query = mysql_query('SELECT count(*) AS num FROM rsvped WHERE attending = 1');
  if ($result = mysql_fetch_array($query)) {
    return $result['num'];
  }
  return 0;
}

/**
 * Get the percentage of people RSVPed.
 * 
 * @return int
 *   Percentage of people who have RSVPed.
 */
function get_percent_rsvped() {
  $num_rsvped = get_num_rsvped() + 2; 
  return round($num_rsvped / 95 * 100);
}

/**
 * Get the percentage of people coming.
 * 
 * @return int
 *   Percentage of people who are coming.
 */
function get_percent_attending() {
  $num_attending = get_num_attending() + 2;
  return round($num_attending / 95 * 100);
}
