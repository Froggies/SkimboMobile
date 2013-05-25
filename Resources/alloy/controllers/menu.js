function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuWindow = Ti.UI.createWindow({
        id: "menuWindow"
    });
    $.__views.menuWindow && $.addTopLevelView($.__views.menuWindow);
    $.__views.menu = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#2F2F2F",
        layout: "vertical",
        id: "menu"
    });
    $.__views.menuWindow.add($.__views.menu);
    $.__views.headerView1 = Ti.UI.createView({
        left: 0,
        width: Alloy.CFG.menuWidth,
        height: "50dp",
        layout: "horizontal",
        id: "headerView1"
    });
    $.__views.menu.add($.__views.headerView1);
    $.__views.logoImage = Ti.UI.createImageView({
        left: "10dp",
        top: "3dp",
        width: "54dp",
        height: "42dp",
        image: "/images/light_home.png",
        id: "logoImage"
    });
    $.__views.headerView1.add($.__views.logoImage);
    $.__views.titleLabel = Ti.UI.createLabel({
        left: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        color: "#fff",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Skimbo",
        id: "titleLabel"
    });
    $.__views.headerView1.add($.__views.titleLabel);
    $.__views.menuList = Ti.UI.createTableView({
        left: 0,
        width: Alloy.CFG.menuWidth,
        height: Ti.UI.FILL,
        backgroundColor: "transparent",
        separatorColor: "#1c252b",
        id: "menuList"
    });
    $.__views.menu.add($.__views.menuList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    (function() {
        Ti.App.Properties.setBool("menuOpen", false);
        var data = [ {
            item: "My columns",
            icon: "/images/light_home.png",
            rowId: 1
        }, {
            item: "Skimber !",
            icon: "/images/light_chat.png",
            rowId: 2
        }, {
            item: "Add column",
            icon: "/images/light_list---add.png",
            rowId: 3
        }, {
            item: "Settings",
            icon: "/images/light_gear.png",
            rowId: 4
        } ];
        var rowData = [];
        for (var i = 0; data.length > i; i++) {
            var row = Alloy.createController("menuRow", data[i]).getView();
            rowData.push(row);
        }
        $.menuList.data = rowData;
        $.menuList.addEventListener("click", function(e) {
            var rowId = e.rowData.title;
            if (1 === rowId) {
                Ti.API.info("[---Menu---] fireEvent: SKIMBO:menuMyColumns");
                Ti.App.fireEvent("SKIMBO:menuMyColumns");
            } else if (2 === rowId) {
                Ti.API.info("[---Menu---] fireEvent: SKIMBO:menuSkimber");
                Ti.App.fireEvent("SKIMBO:menuSkimber");
            } else if (3 === rowId) {
                Ti.API.info("[---Menu---] fireEvent: SKIMBO:menuAddColumn");
                Ti.App.fireEvent("SKIMBO:menuAddColumn");
            } else if (4 === rowId) {
                Ti.API.info("[---Menu---] fireEvent: SKIMBO:menuSettings");
                Ti.App.fireEvent("SKIMBO:menuSettings");
            }
            Ti.App.fireEvent("SKIMBO:hideMenu");
        });
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;