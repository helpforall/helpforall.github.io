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
  $("nav a").click(function() {
    if ($(window).width() < 600) {
      $("nav ul").slideToggle();
      $(".tcon").toggleClass("tcon-transform");
    }
  });
  $(window).scroll(function() {
    var navheight = $('nav').outerHeight();
    if ($(this).scrollTop() > 249) {
      $("nav").addClass("fixed");
      $("body").css("margin-top", "50px");
    } else {
      $("nav").removeClass("fixed");
      $("body").css("margin-top", "0px");
    }
  });
});
