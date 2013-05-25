function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuRow = Ti.UI.createTableViewRow({
        height: "55dp",
        backgroundColor: "#2F2F2F",
        className: "menu_row",
        id: "menuRow"
    });
    $.__views.menuRow && $.addTopLevelView($.__views.menuRow);
    $.__views.icon = Ti.UI.createImageView({
        left: 0,
        width: "60dp",
        height: Ti.UI.SIZE,
        color: "#999",
        textAlign: "center",
        font: {
            fontSize: "50dp",
            fontFamily: "Entypo"
        },
        id: "icon"
    });
    $.__views.menuRow.add($.__views.icon);
    $.__views.item = Ti.UI.createLabel({
        left: "60dp",
        height: Ti.UI.SIZE,
        color: "#ffffff",
        font: {
            fontSize: "20dp"
        },
        id: "item"
    });
    $.__views.menuRow.add($.__views.item);
    $.__views.separator = Ti.UI.createView({
        bottom: 0,
        left: 0,
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#353b3f",
        id: "separator"
    });
    $.__views.menuRow.add($.__views.separator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("[---MenuRow---] args: " + args.item + " / " + args.rowId);
    $.icon.image = args.icon;
    $.item.text = args.item;
    $.menuRow.title = args.rowId;
    $.menuRow.rowId = args.rowId;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;