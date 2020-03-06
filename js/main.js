// var _this = this;
// $(window).on("load", function() {
//     $(".all").mCustomScrollbar({
//         autoHideScrollbar: !0,
//         theme: "light",
//         mouseWheel: { preventDefault: true }
//     });
//     $(".float-popup").mCustomScrollbar({
//         scrollButtons: { enable: !0 },
//         theme: "dark-thick",
//         mouseWheel: { scrollAmount: 250, preventDefault: true },
//         advanced: { updateOnContentResize: true }
//     });
    
//     var sld = new Slider();
//     sld.render().applyCarousel();

//     var asc = new Associate();
//     asc.render();

//     var prd = new Product();
//     prd.render().applyScrollbar();

//     var svc = new Service();
//     svc.render().applyScrollbar();

//     var hm = new Human();
//     hm.render().applyCarousel();

// });
// $(".section-link").on("click", function() {
//     $(".all").mCustomScrollbar("scrollTo", $("." + $(this).attr("data-link")));
// });

// this.overlay.on("click", function() {
//     $(this).css(hideObj);
//     _this.popup.css(hideObj);
//     _this.productDetail.css(hideObj);
//     _this.productDetail
//          .find("iframe")
//          .attr("src", "");
//      _this.productDetail
//          .find("a")
//          .attr("href", "");
// });
// var VN_FLAG =
// "https://adl-foundation.adidas.com/prod/v18.4.1/assets/flags/vn.svg";
// var US_FLAG =
// "https://adl-foundation.adidas.com/prod/v18.4.1/assets/flags/us.svg";
// $("#show-flag").on("click", function() {
//     var secondFlag = $(".second-flag");
//     if (secondFlag.css("opacity") === "1") {
//         secondFlag.css(hideObj);
//     } else {
//         secondFlag.css(showObj);
//     }
// });

// $(".flag").on("mouseenter", function() {
//     $(this)
//     .next()
//     .css(showObj);
// });
// $(".flag").on("mouseleave", function() {
//     $(this)
//     .next()
//     .css(hideObj);
// });
// var mainFlagLocation = $("#main-flag");
// var subFlagLocation = $("#sub-flag");


// $(".flag").on("click", function() {
//     var imgSrcClicked = $(this)
//         .find("img")
//         .attr("src");
//     var imgSrcRemained = imgSrcClicked === VN_FLAG ? US_FLAG : VN_FLAG;
//     mainFlagLocation.find("img").attr("src", imgSrcClicked);
//     subFlagLocation.find("img").attr("src", imgSrcRemained);
//     $(".second-flag").css(hideObj);
// });

const mainController = new MainController();
mainController.render()
                .applyScrollToSection()
                .applyClickOverlay()
                .applyFlag();