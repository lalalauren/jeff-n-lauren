<p>
  We will be providing
  <br/>
  <a class="nav-link" name="shuttle">shuttle service</a>
  from the
  <br/>
  <b>Hampton Inn & Conference Center</b>.
</p>
<br/>

<div id="hotel-block">
  <div id="hotel-block-info">
    <div class="title">Hampton Inn & Conference Center</div>
    <?php if (isMobile()): ?>
      <div id="hotel-image">
        <img src="images/hotel.jpg"/>
      </div>
    <?php endif; ?>
    <div id="hotel-address">1204 Berryville Ave., Winchester, VA 22601</div>
  </div>

  <?php if (!isMobile()): ?>
    <div id="hotel-image">
      <img src="images/hotel.jpg"/>
    </div>
  <?php endif; ?>

  <div class="clearfix"></div>
</div>

<div id="must-book">
  <div id="days-left">
    <div class="big-number"><?php echo floor((strtotime('September 1, 2015') - time()) / 86400); ?></div>
    <div class="big-number-text">days left</div>
  </div>
  <div>Must book rooms by 09/01/2015!</div>
</div>

<div id="hotel-block2">
  <div>
    Stay Date is <br/>
    <span class="date">Saturday, September 12, 2015</span>
    through 
    <span class="date">Sunday, September 13, 2015</span>.
  </div>

  <br/><br/>
  To confirm your rooms, you must call Reservations at <span class="date">1-540-678-4000</span> 
  and say you want to confirm with the <span class="date">Corron Wedding</span> group. 
  <br/><br/><br/>

  We have the following type of rooms blocked:<br/>

  <table>
    <thead>
      <tr>
        <th>Price</th>
        <th>Room Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>$91.00</td>
        <td>1 King or Queen Bed</td>
      </tr>
      <tr>
        <td>$91.00</td>
        <td>2 Double Beds</td>
      </tr>
    </tbody>
  </table>

  <br/>For more information, check out 
  <a href="https://corronwedding.hotelplanner.com/" target="_blank">Expedia's page</a>.
</div>
