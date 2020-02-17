// $(function() {
//   $(".slider").slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: false,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     centerMode: true,
//     centerPadding: "0",
//     prevArrow:
//       '<img src="../img/icon-left.png" class="slick-arrow slick-prev">',
//     nextArrow:
//       '<img src="../img/icon-right.png" class="slick-arrow slick-next">'
//     // responsive: [
//     //   {
//     //     breakpoint: 768,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //       centerMode: false,
//     //     }
//     //   },

//     // ]
//   });
// });

// // Закрыть попап «спасибо»
// $(".mybtn").click(function() {
//   // по клику на крестик
//   $(".js-overlay-thank-you").fadeIn();
// });
// $(".js-close-thank-you").click(function() {
//   // по клику на крестик
//   $(".js-overlay-thank-you").fadeOut();
// });

// $(document).mouseup(function(e) {
//   // по клику вне попапа
//   var popup = $(".popup");
//   if (e.target != popup[0] && popup.has(e.target).length === 0) {
//     $(".js-overlay-thank-you").fadeOut();
//   }
// });

$(function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 40000,
    values: [0, 30000],
    slide: function(event, ui) {
      $("#amount").val(ui.values[0]);
      $("#amount_1").val(ui.values[1]);
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0));
  $("#amount_1").val($("#slider-range").slider("values", 1));
});
