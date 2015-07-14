<?php
// Don't allow direct access to this php file.
if (empty($access) && empty($_REQUEST['name'])) {
  header("location:index#rsvp");
  die();
}

// Require the config file.
require_once 'config.php';

// Get the guests that have already been registered to this IP address and
// the other guests recorded as part of the couple.
list($guests, $other_guests) = get_rsvp_init();
?>
<a name="rsvp"></a>
<div id="rsvp" class="section">
  <div class="section-content">

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

    <div id="rsvp-form">
      <?php if (empty($guests)): ?>
        <input type="text" name="name" id="name" class="rsvp-input" autocomplete="off" placeholder="Enter your name...">
        <div id="rsvp-input-submit" class="rsvp-input"></div>
      <?php else: ?>
        <div id="already-registered">
          You have already registered as <?php echo format_guest_list($guests); ?>. Please contact Lauren or Jeff if you need to register another guest.
          <?php if (!empty($other_guests)): ?>
            Did you want to RSVP <?php echo format_guest_list($other_guests); ?> too?
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
    <div class="clearfix"></div>
  </div>
</div>