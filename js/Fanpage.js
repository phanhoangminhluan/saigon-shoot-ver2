class Fanpage {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$listNews = $(".list-news");
    }
    render(isMobile) {
        const _this = this;
        fanpages.forEach(fanpage => {
            if (isMobile) {
                fanpage.tab = "";
            }
            _this.$listNews.append(TemplateUtil.template(TemplateUtil.FANPAGE, fanpage) );
        })
    }
}