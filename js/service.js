class Service {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$servicePlace = $("#service-place");
        this.$serviceDetail = $(".service-detail-popup");
        this.$overlay = $(".overlay");
    }
    render() {
        services.forEach(service => {
            this.$servicePlace.append(
                TemplateUtil.template(TemplateUtil.SERVICE, service)
            );
            this.viewDetail(service);
        });
        return this;
    }

    viewDetail(service) {
        var _this = this;
        var $lastserviceViewIcon = this.$servicePlace.find(
            ".col2:last-child i"
        );
        $lastserviceViewIcon.on("click", function(event) {
            _this.$serviceDetail.css(showObj);
            _this.$overlay.css(showObj);

            _this.$serviceDetail
                .find(".mCSB_container")
                .html(service.serviceDesc);
        });
    }

    applyScrollbar() {
         $(".service-scrollbar").mCustomScrollbar({
             scrollButtons: { enable: !0 },
             theme: "dark-thick",
             scrollbarPosition: "outside",
             mouseWheel: { scrollAmount: 250 },
             advanced: { updateOnContentResize: true }
         });
        return this;
    }
}