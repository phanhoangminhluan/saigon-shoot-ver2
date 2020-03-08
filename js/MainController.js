class MainController{
    constructor() {
        this.placeholders();
        this.beforeRender();
    }
    placeholders() {
        this.$all = $(".all");
        this.$floatPopup = $(".float-popup");
        this.$overlay = $(".overlay");
        this.$productDetail = $(".product-detail-popup");

        this.showObj = { opacity: "1", visibility: "visible" };
        this.hideObj = { opacity: "0", visibility: "hidden" };
        this.slider = new Slider();
        this.associate = new Associate();
        this.product = new Product();
        this.service = new Service();
        this.human = new Human();
        this.fanpage = new Fanpage();
    }
    render() {
        const isMobile = this.isMobile();
        this.slider.render().applyCarousel(); 
        this.associate.render();
        this.product.render().applyScrollbar(isMobile);
        this.service.render().applyScrollbar(isMobile);
        this.human.render(isMobile).applyCarousel();
        this.fanpage.render(isMobile);
        return this;
    }
    
    beforeRender() {
        this.$all.mCustomScrollbar({
            autoHideScrollbar: !0,
            theme: "light",
            mouseWheel: { preventDefault: true },
        });
        this.$floatPopup.mCustomScrollbar({
            scrollButtons: { enable: !0 },
            theme: "dark-thick",
            mouseWheel: { scrollAmount: 250, preventDefault: true },
            advanced: { updateOnContentResize: true }
        });
    }
    applyScrollToSection() {
        $(".section-link").on("click", function() {
            $(".all").mCustomScrollbar(
                "scrollTo",
                $("." + $(this).attr("data-link"))
            );
        });
        return this;
    }
    applyClickOverlay() {
        var _this = this;
        this.$overlay.on("click", function() {
            $(this).css(_this.hideObj);
            _this.$floatPopup.css(_this.hideObj);
            _this.$productDetail.css(_this.hideObj);
            _this.$productDetail.find("iframe").attr("src", "");
            _this.$productDetail.find("a").attr("href", "");
        });
        return this;
    }
    applyFlag() {
        var _this = this;
        var VN_FLAG =
            "https://adl-foundation.adidas.com/prod/v18.4.1/assets/flags/vn.svg";
        var US_FLAG =
            "https://adl-foundation.adidas.com/prod/v18.4.1/assets/flags/us.svg";

        $("#show-flag").on("click", function() {
            var secondFlag = $(".second-flag");
            if (secondFlag.css("opacity") === "1") {
                secondFlag.css(_this.hideObj);
            } else {
                secondFlag.css(_this.showObj);
            }
        });

        $(".flag").on("mouseenter", function() {
            $(this)
                .next()
                .css(_this.showObj);
        });
        $(".flag").on("mouseleave", function() {
            $(this)
                .next()
                .css(_this.hideObj);
        });

        var mainFlagLocation = $("#main-flag");
        var subFlagLocation = $("#sub-flag");

        $(".flag").on("click", function() {
            var imgSrcClicked = $(this)
                .find("img")
                .attr("src");
            var imgSrcRemained = imgSrcClicked === VN_FLAG ? US_FLAG : VN_FLAG;
            mainFlagLocation.find("img").attr("src", imgSrcClicked);
            subFlagLocation.find("img").attr("src", imgSrcRemained);
            $(".second-flag").css(_this.hideObj);
        });
        return this;
    }
    isMobile() {
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

       // if (isMobile.iOS() || isMobile.Android) {
       //     return true;
       // }
        const width = window.innerWidth;
        if (width <= 414) {
           return true;
        }
       return false;
    }
}