class Human {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$humanPlace = $("#human-place");
        this.$humanDetail = $(".human-detail-popup");
        this.$overlay = $(".overlay");
    }
    render(isMobile) {
        
        humans.forEach(human => {
            this.$humanPlace.append(TemplateUtil.template(TemplateUtil.HUMAN, human));
            var $lastChild = this.$humanPlace.find(".item:last-child");
            // this.viewDetail(human, $lastChild);
            this.viewLink($lastChild, ".fa-facebook-official");
            this.viewLink($lastChild, ".fa-instagram");
        })
       if (isMobile) {
           $(".fab_hover").remove();
       }
        return this;
    }
    viewDetail($lastChild) {
        var _this = this;
        $lastChild.on("click", function() {
                var id = $(this).attr("id")
                _this.$humanDetail.css(showObj);
                _this.$overlay.css(showObj);

                _this.$humanDetail
                    .find(".mCSB_container")
                    .html(humanMap.get(id).humanDesc);
            });
    }
    viewLink($lastChild, cssSelector) {
        $lastChild.find(cssSelector)
            .on("click", function() {
                var href = $(this).attr("data-href");
                window.open(href, "_blank");
            })
    }
    applyCarousel() {
        this.$humanPlace.owlCarousel({
            nav: true,
            loop: true,
            margin: 10,
            dots: false,
            // autoplay: true,
            autoplayHoverPause: true,
            // autoplayTimeout: 3000,
            mouseDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
        // to fix bug of owl carousel (can not handle event of first item in slider)
        var _this = this;
        this.$humanPlace.find(".fa-external-link").each(function() {
            _this.viewDetail($(this));
        });
        return this;
    }

}