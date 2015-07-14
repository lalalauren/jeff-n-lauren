$(function() {

  /**
   * Gets a random opacity level.
   * 
   * @returns {Number}
   *   Opacity level.
   */
  function getOpacity() {
    return (Math.floor(Math.random() * 50) + 10) / 100;
  }
  // Make the function available globally.
  window.getOpacity = getOpacity;

  /**
   * Get a random color from a set of approved colors.
   * 
   * @returns {String}
   *   Hex color.
   */
  function getColor() {
    var shades = ["D1", "D6", "E0", "E6", "EB", "F0", "F5", "FA", "FF", // More white/light yellow
      "99", "A3", "AD", "B8", "C2", "CC", "D6", "E0", "EB", "F5"]; // More yellow
    return "#FFFF" + shades[Math.floor(Math.random() * shades.length)];
  }
  // Make the function available globally.
  window.getColor = getColor;

});
