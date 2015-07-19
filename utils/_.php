<?php

// Set the default timezone.
date_default_timezone_set('America/New_York');

/**
 * Encodes special characters in a plain-text string for display as HTML.
 * 
 * Also validates strings as UTF-8 to prevent cross site scripting attacks on 
 * Internet Explorer 6.
 * 
 * @param string $text
 *   The text to be checked or processed.
 * 
 * @return string
 *   An HTML safe version of $text. If $text is not valid UTF-8, an empty string 
 *   is returned and, on PHP < 5.4, a warning may be issued depending on server 
 *   configuration (see https://bugs.php.net/bug.php?id=47494).
 */
function check_plain($text) {
  return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

/**
 * Gets a users IP address.
 * 
 * @return string
 *   IP address.
 */
function getIP() {
  if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  } else {
    $ip = $_SERVER['REMOTE_ADDR'];
  }

  return check_plain($ip);
}
