$(function() {
  var initialPos = $('#menu').offset().top;

  $(window).scroll(function()
  {
    var scrolled = $(window).scrollTop();


    if (scrolled > initialPos) {
      $('#menu').css({
        position: "fixed",
        top: '0'
      });
      $('#little-menu').show();
      $('#navigation').hide();
    } else {

      $('#menu').css({
        position: "absolute",
        top: initialPos + "px"
      });
      $('#little-menu').hide();
      $('#navigation').show();
    }

  });
  
  $('#open-menu').click(function () {
    $('#navigation').toggle('fast');
  });
});