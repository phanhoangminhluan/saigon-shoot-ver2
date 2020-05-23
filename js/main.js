const mainController = new MainController();
const VN = 1;
const EN = 2;
var LANG = VN;
mainController.render()
                .applyScrollToSection()
                .applyClickOverlay()
                .applyFlag();