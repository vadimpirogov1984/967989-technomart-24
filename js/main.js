$(function() {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    prevArrow:
      '<img src="../img/icon-left.png" class="slick-arrow slick-prev">',
    nextArrow:
      '<img src="../img/icon-right.png" class="slick-arrow slick-next">'
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: false,
    //     }
    //   },

    // ]
  });
});
