$(function() {
  
  $(window).scroll(function()
  {
    var scrolled = $(window).scrollTop();

    if (scrolled > 200) {
      $('#menu').css({
        position: "fixed",
        top: '0'
      });
      $('#little-menu').show();
      $('#navigation').hide();
    } else {
      $('#menu').css({
        position: "relative",
      });
      $('#little-menu').hide();
      $('#navigation').show();
    }

  });
  
  $('#open-menu').click(function () {
    $('#navigation').toggle('fast');
  });
});