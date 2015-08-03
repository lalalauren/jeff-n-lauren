There will be a shuttle provided from the <b>Hampton Inn & Conference Center</b>.
<br/><br/>
In order for us to provide enough seating, please let us know if you or others 
plan on using the shuttle.
<br/><br/>
<?php
$query = mysql_query('SELECT name,shuttle FROM shuttle WHERE ip = "' . getIP() . '" AND name NOT LIKE "% - DELETED%"');
$count = mysql_num_rows($query);
$result = mysql_fetch_array($query);
?>
<?php if (!$result): ?>
  <span id="shuttle-form-original"></span>
<?php else: ?>
  <span id="shuttle-already-registered">
    You have already requested a shuttle for
    <?php echo $count; ?>
    <?php if ($count == 1): ?>person<?php else: ?>people<?php endif; ?>
    from this IP!
  </span>
  <div id="shuttle-form-old">

    <?php do { ?>
      <div class="shuttle-guest-text">
        <span class="shuttle-name"><?php echo $result['name']; ?></span><span> will be using the shuttle </span><span class="shuttle-option"><?php echo $result['shuttle']; ?></span><span>.</span>
      </div>
    <?php } while ($result = mysql_fetch_array($query)); ?>

    <div id="old-shuttle-form-edit"><a id="edit-shuttle-form">Click here</a> to edit your shuttle form.</div>

  </div>
<?php endif; ?>
