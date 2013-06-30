function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.applicationWindow = Ti.UI.createWindow({
        backgroundColor: "#F5F5F5",
        layout: "vertical",
        top: 0,
        left: 0,
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.FILL,
        id: "applicationWindow"
    });
    $.__views.applicationWindow && $.addTopLevelView($.__views.applicationWindow);
    $.__views.__alloyId1 = Alloy.createController("headerViewWindow", {
        id: "__alloyId1",
        __parentSymbol: $.__views.applicationWindow
    });
    $.__views.__alloyId1.setParent($.__views.applicationWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var commandService = require("commandService");
    var menuService = require("menuService");
    Ti.App.addEventListener("SKIMBO:menuOpen", function() {
        if (Ti.App.Properties.getBool("menuOpen")) {
            $.applicationWindow.animate(menuService.menuShow(0));
            Ti.App.Properties.setBool("menuOpen", false);
        } else {
            $.applicationWindow.animate(menuService.menuShow(Alloy.CFG.menuWidth));
            Ti.App.Properties.setBool("menuOpen", true);
        }
    });
    commandService.connectWithSkimbo();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;