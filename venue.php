<?php
// Don't allow direct access to this php file.
if (empty($access)) {
  header("location:index.php");
  die();
}
?>
<div id="about-the-venue" class="section">
  <div id="venue-info" class="section-content">
    Our venue is a historic home called The Retreat that is being 
    <a href="http://luckettstore.com/retreat-at-cool-spring-history/">lovingly restored</a>
    by Suzanne, owner of 
    <a href="http://luckettstore.com">The Old Lucketts Store</a>.
    The Retreat was built in 1799 by 
    <a href="http://en.wikipedia.org/wiki/Thomas_Parker_(soldier)">Thomas Parker</a>.
    The beautiful rolling greens and river nearby have held everything from
    <a href="http://en.wikipedia.org/wiki/Battle_of_Cool_Spring">a Civil War battle</a>
    to a golf course to a
    <a href="http://www.su.edu/venue/cool-spring/">university campus</a>.
    The nearby area has a lake and 3 waterfalls and beautiful walking trails.

    <ul id="venue-gallery">
      <?php foreach (glob('gallery/venue/*') as $i => $pic): ?>
      <li><a name="pic<?php echo $i;?>"></a><img src="<?php echo $pic; ?>"></li>
      <?php endforeach; ?>
    </ul>

  </div>
</div>