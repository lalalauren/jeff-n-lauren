<?php

// Allow access.
$access = 'access_lock';

// Require the config file.
require_once 'config.php';
// Include the libraries.
foreach (glob('utils/*.php') as $util) {
  include_once $util;
}

// Get the percent type.
$percent_type = check_plain($_REQUEST['percent']);

// If we're trying to get the percent rsvped.
if ($percent_type == 'rsvped') {
  echo get_percent_rsvped();
}
// If we're trying to get the percent coming/attending.
elseif ($percent_type == 'attending') {
  echo get_percent_attending();
}
// Otherwise, this is not recognized so fail with a 404.
else {
  header('Page does not exist.', true, 404);
  exit();
}