class Intro {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$intro = $(".intro-text");
    }
    render() {
        this.$intro.html(intro.introVie);
    }
    translate() {
        if (LANG === EN) {
            this.$intro.html(intro.introEng);
        } else {
            this.$intro.html(intro.introVie);
        }
    }
}