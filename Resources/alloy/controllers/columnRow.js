function Controller() {
    function getSocialNetworkName(unifiedRequest) {
        return unifiedRequest.split(".")[0];
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.columnRow = Ti.UI.createTableViewRow({
        id: "columnRow"
    });
    $.__views.columnRow && $.addTopLevelView($.__views.columnRow);
    $.__views.name = Ti.UI.createLabel({
        id: "name"
    });
    $.__views.columnRow.add($.__views.name);
    $.__views.separator = Ti.UI.createView({
        id: "separator"
    });
    $.__views.columnRow.add($.__views.separator);
    $.__views.controls = Ti.UI.createView({
        id: "controls"
    });
    $.__views.columnRow.add($.__views.controls);
    $.__views.socialNetworks = Ti.UI.createView({
        id: "socialNetworks"
    });
    $.__views.controls.add($.__views.socialNetworks);
    $.__views.verticalSeparator = Ti.UI.createView({
        id: "verticalSeparator"
    });
    $.__views.controls.add($.__views.verticalSeparator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("[---ColumnRow---] args: " + args.name + " / " + args.rowId);
    $.name.text = args.name;
    for (var i = 0; args.socialNetworks.length > i; i++) {
        var image = Ti.UI.createImageView({
            image: "/images/" + getSocialNetworkName(args.socialNetworks[i].service) + ".png",
            width: "24px",
            height: "24px"
        });
        $.socialNetworks.add(image);
    }
    $.columnRow.title = args.rowId;
    $.columnRow.rowId = args.rowId;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;