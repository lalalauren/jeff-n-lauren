<?php $access = 'access_lock'; ?>
<?php
// Libraries
foreach (glob('utils/*.php') as $util) {
  include_once $util;
}
// Database configs
include_once 'config.php';
?>
<html>
  <head>
    
    <!-- Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <title>Jeff & Lauren</title>

    <!--Stylesheets-->
    <?php
    $external_css = array(
        '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css',
        '//cdn.jsdelivr.net/jquery.slick/1.5.6/slick.css',
        '//cdn.jsdelivr.net/jquery.slick/1.5.6/slick-theme.css',
    );
    $internal_css = glob('css/*.css');
    $css = array_merge($external_css, $internal_css);
    ?>
    <?php foreach ($css as $sheet): ?>
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
  </head>

  <?php
  // Define the pages that we will use.
  $pages = array(
      'about-the-wedding' => 'About the Ceremony & Reception',
      'about-the-venue' => 'About the Venue',
      'directions' => 'Directions',
      'hotel' => 'Hotels & Accomodations',
      'shuttle' => 'Shuttle Service',
      'registry' => 'Our Registry',
      'rsvp' => 'RSVP',
  );
  ?>

  <body>
    <!--Header-->
    <?php include 'header.php'; ?>

    <!--Content-->
    <div id="section-slides">

      <?php foreach ($pages as $page_key => $page_name): ?>
        <div class="slide" id="<?php echo $page_key; ?>">
          <?php include $page_key . '.php'; ?>
        </div>
      <?php endforeach; ?>

    </div>

    <!-- Slick Library -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.6/slick.min.js"></script>

  </body>
</html>