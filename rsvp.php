<?php
// Don't allow direct access to this php file.
if (empty($access) && empty($_REQUEST['name'])) {
  header("location:index#rsvp");
  die();
}

// Require the config file.
require_once 'config.php';

// Get the guests that have already been RSVPed to this IP address and
// the other guests recorded as part of the couple.
list($guests, $other_guests) = get_rsvp_init();
?>

<div id="rsvp-text-and-arrow">
  <!--RSVP Text-->
  <h2>
    <?php foreach (array('R', 'S', 'V', 'P') as $letter): ?>
      <span id="letter-<?php echo $letter; ?>">
        <?php echo $letter; ?>
      </span>
    <?php endforeach; ?>
  </h2>
  <!--Icon made by Icomoon (http://www.icomoon.io) from www.flaticon.com (http://www.flaticon.com) is licensed under CC BY 3.0 (http://creativecommons.org/licenses/by/3.0/) -->
  <img name="rsvp-arrow" src="images/arrow.png"/>
</div>

<div id="rsvp-form">
  <?php if (empty($guests)): ?>
  <div id="please-rsvp">Please RSVP by <u>August 16</u>!</div>
    <input type="text" name="name" id="name" class="rsvp-input" autocomplete="off" placeholder="Enter your name...">
  <?php else: ?>
    <div id="already-rsvped">
      You have already RSVPed as <?php echo format_guest_list($guests); ?>.
      <?php if (!empty($other_guests)): ?>
        Did you want to RSVP <?php echo format_guest_list($other_guests); ?> too?
      <?php else: ?>
        Please contact Lauren or Jeff if you need to RSVP another guest.
      <?php endif; ?>
    </div>
  <?php endif; ?>
</div>
<div class="clearfix"></div>

<div id="num-rsvped" class="rsvp-block">
  <div class="big-number"><span id="percent-rsvped"><?php echo get_percent_rsvped(); ?></span>%</div>
  <div class="big-number-text">have RSVPed</div>
</div>

<div id="num-coming" class="rsvp-block">
  <div class="big-number"><span id="percent-attending"><?php echo get_percent_attending(); ?></span>%</div>
  <div class="big-number-text">are coming</div>
</div>

<div id="days-left-rsvp" class="rsvp-block">
  <div class="big-number"><?php echo floor((strtotime('August 12, 2015') - time()) / 86400); ?></div>
  <div class="big-number-text">days left to RSVP</div>
</div>