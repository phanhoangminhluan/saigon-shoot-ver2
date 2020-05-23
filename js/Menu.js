class Menu {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$menu = $(".header-right ul");
        this.$mainpage = $(this.$menu.find("li")[0]);
        this.$intro = $(this.$menu.find("li")[1]);
        this.$human = $(this.$menu.find("li")[2]);
        this.$serviceProduct = $(this.$menu.find("li")[3]);
        this.$fanpage = $(this.$menu.find("li")[4]);
        this.$connect = $(this.$menu.find("li")[5]);
    }
    translate() {
        if (LANG === EN) {
            this.$mainpage.find("a").html(menus[0].menuEng);
            this.$intro.find("a").html(menus[1].menuEng);
            this.$human.find("a").html(menus[2].menuEng);
            this.$serviceProduct.find("a").html(menus[3].menuEng);
            this.$fanpage.find("a").html(menus[4].menuEng);
            this.$connect.find("a").html(menus[5].menuEng);
        } else {
             this.$mainpage.find("a").html(menus[0].menu);
             this.$intro.find("a").html(menus[1].menu);
             this.$human.find("a").html(menus[2].menu);
             this.$serviceProduct.find("a").html(menus[3].menu);
             this.$fanpage.find("a").html(menus[4].menu);
             this.$connect.find("a").html(menus[5].menu);
        }
    }
}