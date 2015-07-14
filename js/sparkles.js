$(function() {

  /**
   * Get a random size.
   * 
   * @returns {Number}
   *   Size.
   */
  function getSize() {
    return Math.floor(Math.random() * 4) + 1;
  }

  /**
   * Create a sparkle.
   * 
   * @returns {object}
   *   Return the developed sparkle.
   */
  function generateSparkle() {
    // Get an X coordinate somewhere in the width of the screen.
    var x = Math.floor(Math.random() * window.innerWidth);
    // Get a Y coordinate somewhere in the top strings section.
    var y = Math.floor(Math.random() * (200));

    // Create the circle at the determined X & Y coordinates and at a random
    // size.
    var circle = sparklePaper.circle(x, y, getSize());

    // Make the circle a random color.
    circle.attr("fill", window.getColor());
    // Make sure the circle does not have a border.
    circle.attr("stroke", "none");
    // Make sure the circle is hidden by default.
    circle.hide();

    // Make the sparkle fade in.
    $(circle.node).fadeIn(1000);

    // Return the sparkle.
    return circle;
  }

  // Create an a bunch of small circles that should look like sparkles.
  var sparklePaper = Raphael(0, 0, window.innerWidth, 200);

  // Pre-determine the max & min number of sparkles.
  var maxCircles = 100, minCircles = 50;
  // Keep track of the circles.
  var circles = [];

  // Start painting the sparkles on.
  for (var i = 0; i < maxCircles; i++) {
    circles[i] = generateSparkle();
  }

  // Tick, toc.
  var tick;

  // Ticker function.
  (function ticker() {
    // If we're going to generate a new circle...
    if (circles.length < maxCircles && Math.floor(Math.random() * 2) === 0) {
      // Decide how many circles to add by calculating the difference between
      // the current number of circles and the max number of circles and
      // generate between 1 & N.
      var add = Math.floor(Math.random() * (maxCircles - circles.length)) + 1;
      // For the number of circles we want to add...
      for (var i = 0; i < add; i++) {
        // Fade in a new circle and add it to the end of the list.
        circles[circles.length + i] = generateSparkle();
      }
    }
    // If we're going to remove an old circle...
    else if (circles.length > minCircles) {
      // Decide how many circles to remove by calculating the difference
      // between the current number of circlesand the minimum number of circles
      // and generate a number between 0 & N.
      var remove = Math.floor(Math.random() * (circles.length - minCircles));
      // For the number of circles we want to remove...
      for (var i = 0; i < remove; i++) {
        // Randomly select a position to remove.
        var posToRemove = Math.floor(Math.random() * circles.length);
        // Fade the circle out and remove it.
        if (circles[posToRemove] !== undefined) {
          $(circles[posToRemove].node).fadeOut(2000, function() {

            // Remove the circle from the paper.
            this.remove();
            // Remove the circle from the array.
            circles.splice(posToRemove, 1);
          });
        }
      }
    }
    
    sparklePaper.safari();
    
    // Tic-toc.
    tick = setTimeout(ticker, 5000);
    console.log('tic-toc');
  })();

  /**
   * This is the ticker that keeps things moving.
   * 
   * @returns {undefined}
   */
  return function() {
    clearTimeout(tick);
    r.remove();
  };

});


