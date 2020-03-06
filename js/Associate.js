class Associate {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$associatePlace = $("#associate-place");
    }
    render() {
        var _this = this;
        associates.forEach(associate => {
            _this.$associatePlace.append(TemplateUtil.template(TemplateUtil.ASSCOCIATE, associate));
        });
        return this;
    }
}