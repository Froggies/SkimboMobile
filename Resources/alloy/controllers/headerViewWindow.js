function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.headerViewWindow = Ti.UI.createView({
        backgroundColor: "#545454",
        height: 60,
        visible: true,
        id: "headerViewWindow"
    });
    $.__views.headerViewWindow && $.addTopLevelView($.__views.headerViewWindow);
    $.__views.navigationButton = Ti.UI.createButton({
        top: 11,
        left: 11,
        height: 39,
        width: 41,
        backgroundImage: "/images/light_list@2x.png",
        id: "navigationButton"
    });
    $.__views.headerViewWindow.add($.__views.navigationButton);
    $.__views.windowTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        color: "#fff",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        id: "windowTitle"
    });
    $.__views.headerViewWindow.add($.__views.windowTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.windowTitle.text = "test";
    $.navigationButton.addEventListener("click", function() {
        Ti.API.info("[---Event---] Menu open : " + Ti.App.Properties.getBool("menuOpen"));
        Ti.App.fireEvent("SKIMBO:menuOpen");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;