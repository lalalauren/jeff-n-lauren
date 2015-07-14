$(function() {

  // Define a closing div and set it up to work.
  function addOverlayClose() {
    var close = $('<div id="overlay-close"><a>X</a></div>');
    close.click(function() {
      // Remove the content.
      $('.overlay-content').remove();
      // Remove the overlay.
      $("#overlay").remove();
    });
    return close;
  }
  
  // Register the overlay close globally.
  window.overlayClose = addOverlayClose;
});