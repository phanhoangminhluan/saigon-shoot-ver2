class Header {
    constructor() {
        this.placeholders();
    }
    placeholders() {
        this.$headerRight = $(".header-right");
    }
    render(isMobile) {  
        if(isMobile) this.$headerRight.remove();
        return this;
        
    }
}