$(document).ready(function() {
  $(".tcon").on("click", function() {
    $(this).toggleClass("tcon-transform");
    $("nav ul").slideToggle(300);
  });
  $(window).on("resize", function() {
    if ($(this).width() > 600) {
      $("nav ul").show();
      $(".tcon").removeClass("tcon-transform");
    } else {
      $("nav ul").hide();
    }
  });

});
