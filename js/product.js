class Product {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$productPlace = $("#product-place");
        this.$productDetail = $(".product-detail-popup");
        this.$overlay = $(".overlay");
    }
    render() {
        products.forEach(product => {
            this.$productPlace.append(TemplateUtil.template(TemplateUtil.PRODUCT, product));
            this.viewDetail(product);
        });
        return this;
    }

    viewDetail(product) {
        var _this = this;
        var $lastProductViewIcon = this.$productPlace.find(".col2:last-child i");
        $lastProductViewIcon.on("click", function(event) {

            _this.$productDetail.css(showObj);
            _this.$overlay.css(showObj);
    
            var id = $(event.currentTarget).attr("id");
            _this.$productDetail.find("iframe").attr("src","https://www.youtube.com/embed/" + product.productVideo);
            if (id === "tv-show") {
                _this.$productDetail
                    .find("a")
                    .attr("href", product.productYoutube);
            } else {
                _this.$productDetail
                    .find("a")
                    .attr(
                        "href",
                        "https://www.youtube.com/playlist?list=" +
                            product.productYoutube
                    );
            }
        });

    }
    applyScrollbar() {
         $(".product-scrollbar").mCustomScrollbar({
             scrollButtons: { enable: !0 },
             theme: "dark-thick",
             scrollbarPosition: "outside",
             mouseWheel: { scrollAmount: 250 },
             advanced: { updateOnContentResize: true }
         });
    }

}