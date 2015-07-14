<?php $access = 'access_lock'; ?>
<html>
  <head>
    <title>Jeff & Lauren</title>
    
    <!--Stylesheets-->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <?php foreach (glob('css/*.css') as $sheet): ?>
      <link rel='stylesheet' type='text/css' href='<?php echo $sheet; ?>'>
    <?php endforeach; ?>

    <!--Fonts-->
    <?php foreach (array("Alex+Brush", "Indie+Flower", "Coming+Soon", "Dosis") as $font): ?>
      <link href='http://fonts.googleapis.com/css?family=<?php echo $font; ?>' rel='stylesheet' type='text/css'>
    <?php endforeach; ?>

    <!--Scripts-->
    <?php
    $external_scripts = array(
        '//code.jquery.com/jquery-1.11.0.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js',
        'https://maps.googleapis.com/maps/api/js',
        'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js',
    );
    $internal_scripts = glob('js/*.js');
    $scripts = array_merge($external_scripts, $internal_scripts);
    ?>
    <?php foreach ($scripts as $script): ?>
      <script src='<?php echo $script; ?>' type='text/javascript'></script>
    <?php endforeach; ?>
    
    <?php
    // Libraries
    foreach (glob('utils/*.php') as $util) {
      include_once $util;
    }
    ?>

  </head>
  <body>
    <!--Header-->
    <?php include 'header.php'; ?>

    <!--Content-->
    <?php include 'wedding.php'; ?>
    <?php include 'venue.php'; ?>
    <?php include 'directions.php'; ?>
    <?php include 'rsvp.php'; ?>
    
  </body>
</html>