<?php
// Don't allow direct access to this php file.
if (empty($access)) {
  header("location:index.php");
  die();
}
?>
<div id="directions" class="section">
  <div id="map-and-directions" class="section-content">
    <div class="map-bar">
      <h2>Directions</h2>
    </div>
    <div id="venue-map"></div>
    <div id="venue-directions" class="map-bar">
      <ul>
        <li><a href="#map-and-directions" id="baltimore">Baltimore</a></li>
        <li><a href="#map-and-directions" id="dc">Washington D.C.</a></li>
      </ul>
    </div>
  </div>
</div>