<div id="header">
  <div id="strings"></div>
  <h1 id="pagetitle" class="title">Jeff & Lauren</h1>
  <div id="subtitle" class="title">September 12, 2015</div>
</div>
<div id="menu">
  <div id="little-menu">
    <span class="title" style="float: left;">
      Jeff & Lauren
    </span>
    <span id="open-menu" style="float: right;"></span>
    <div class="clearfix"></div>
  </div>
  <div id="navigation">
    <?php foreach ($pages as $link_key => $link_text): ?>
      <a name="<?php echo $link_key; ?>"><?php echo $link_text; ?></a>
    <?php endforeach; ?>
  </div>
</div>