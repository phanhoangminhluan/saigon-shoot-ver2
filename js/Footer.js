class Footer {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$contactCompanyName = $(".contact-company-name");
    }
    render() {
        this.$contactCompanyName.html(footer.footerVie);
    }
    translate() {
        if (LANG === EN) {
            this.$contactCompanyName.html(footer.footerEng);
        } else {
            this.$contactCompanyName.html(footer.footerVie);
        }
    }
}