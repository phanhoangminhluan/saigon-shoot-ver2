class Slider {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$sliderPlace = $("#slider-place");
    }
    render() {
        sliders.forEach(slider => {
            this.$sliderPlace.append(TemplateUtil.template(TemplateUtil.SLIDER, slider));
        })
        return this;
    }
    applyCarousel() {
        this.$sliderPlace.owlCarousel({
            nav: true,
            loop: true,
            margin: 10,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            authoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        return this;
    }
}