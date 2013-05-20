function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tab = Ti.UI.createTabGroup({
        id: "tab"
    });
    $.__views.allColumnsTab = Alloy.createController("allColumns", {
        id: "allColumnsTab"
    });
    $.__views.tab1 = Ti.UI.createTab({
        height: "",
        window: $.__views.allColumnsTab.getViewEx({
            recurse: true
        }),
        title: "Home",
        icon: "images/light_home@2x.png",
        id: "tab1"
    });
    $.__views.tab.addTab($.__views.tab1);
    $.__views.skimber = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "skimber",
        title: "Tab 2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "I am Window 2",
        id: "__alloyId3"
    });
    $.__views.skimber.add($.__views.__alloyId3);
    $.__views.__alloyId2 = Ti.UI.createTab({
        height: "",
        window: $.__views.skimber,
        title: "Skimber !",
        icon: "images/light_list@2x.png",
        id: "__alloyId2"
    });
    $.__views.tab.addTab($.__views.__alloyId2);
    $.__views.addColumn = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "addColumn"
    });
    $.__views.__alloyId4 = Ti.UI.createTab({
        height: "",
        window: $.__views.addColumn,
        title: "Add column",
        icon: "images/light_list---add@2x.png",
        id: "__alloyId4"
    });
    $.__views.tab.addTab($.__views.__alloyId4);
    $.__views.settings = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "settings"
    });
    $.__views.__alloyId5 = Ti.UI.createTab({
        height: "",
        window: $.__views.settings,
        title: "Settings",
        icon: "images/light_gears@2x.png",
        id: "__alloyId5"
    });
    $.__views.tab.addTab($.__views.__alloyId5);
    $.__views.tab && $.addTopLevelView($.__views.tab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("commandService");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;