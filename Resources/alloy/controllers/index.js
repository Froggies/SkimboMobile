function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.connectionProviders = Alloy.createWidget("com.appcelerator.buttongrid", "widget", {
        id: "connectionProviders",
        __parentSymbol: $.__views.index
    });
    $.__views.connectionProviders.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var providersService = require("providersService");
    require("constant");
    var componentService = require("componentService");
    var userToken = Ti.App.Properties.getString("userToken");
    var userIsConnected = void 0 != userToken;
    var menuWindowController = Alloy.createController("menu");
    menuWindowController.getView().open();
    if (true == userIsConnected) {
        var applicationController = Alloy.createController("application");
        applicationController.getView().open();
    } else {
        providersService.getAllConnectionProviders(function(data) {
            var dataTransformed = [];
            for (var i = 0; data.length > i; i++) dataTransformed.push({
                id: data[i].name,
                click: function() {
                    componentService.createConnectionWebView(this.id);
                    userIsConnected = true;
                }
            });
            $.connectionProviders.init({
                buttons: dataTransformed,
                buttonWidth: Alloy.isTablet ? 200 : 100,
                buttonHeight: Alloy.isTablet ? 200 : 100,
                backgroundColor: "white",
                backgroundSelectedColor: "white"
            });
        });
        $.index.open();
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;