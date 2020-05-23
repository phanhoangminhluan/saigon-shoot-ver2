class Heading {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$intro = $(".general-introduction .headings-black");
        this.$associate = $(".associates .headings-black");
        this.$human = $(".humans .headings");
        this.$service = $(".services .headings");
        this.$product = $(".products .headings");
        this.$fanpage = $(".news-info .headings");
        this.$connect = $(".contact .headings");
        this.INTRO = 0;
        this.PARTNERS = 1;
        this.CREATIVE_TEAM = 2;
        this.SERVICE = 3;
        this.PRODUCT = 4;
        this.CONNECT_WITH_US = 5;
        this.CONTACT = 6;
    }
    translate() {
        if (LANG === EN) {
            this.$intro.html(headings[this.INTRO].headingEng);
            this.$associate.html(headings[this.PARTNERS].headingEng);
            this.$human.html(headings[this.CREATIVE_TEAM].headingEng);
            this.$service.html(headings[this.SERVICE].headingEng);
            this.$product.html(headings[this.PRODUCT].headingEng);
            this.$fanpage.html(headings[this.CONNECT_WITH_US].headingEng);
            this.$connect.html(headings[this.CONTACT].headingEng);
        } else {
            this.$intro.html(headings[this.INTRO].heading);
            this.$associate.html(headings[this.PARTNERS].heading);
            this.$human.html(headings[this.CREATIVE_TEAM].heading);
            this.$service.html(headings[this.SERVICE].heading);
            this.$product.html(headings[this.PRODUCT].heading);
            this.$fanpage.html(headings[this.CONNECT_WITH_US].heading);
            this.$connect.html(headings[this.CONTACT].heading);
        }
    }
}