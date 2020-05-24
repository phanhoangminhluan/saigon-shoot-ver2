class Header {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$headerRight = $(".header-right");
        this.$flagMobile = $(".flag-mobilesite")
    }
    render(isMobile) {  
        if(isMobile) 
        {
            this.$headerRight.remove();
            this.$flagMobile.html(flag.mobileFlag);
        }
        return this;
        
    }
}

