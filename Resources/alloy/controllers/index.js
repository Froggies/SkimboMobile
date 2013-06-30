function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "100%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FAFAFA",
                offset: 0
            }, {
                color: "#C7C7C7",
                offset: 1
            } ]
        },
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.logo = Ti.UI.createImageView({
        image: "/images/logo.png",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "30dp",
        id: "logo"
    });
    $.__views.index.add($.__views.logo);
    $.__views.connectWithFacebookView = Ti.UI.createView({
        color: "#FFFFFF",
        height: "50dp",
        width: "250dp",
        layout: "horizontal",
        backgroundColor: "#325C99",
        id: "connectWithFacebookView"
    });
    $.__views.index.add($.__views.connectWithFacebookView);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: "55dp",
            fontFamily: "EntypoSocial"
        },
        color: "#FFFFFF",
        text: "",
        id: "__alloyId3"
    });
    $.__views.connectWithFacebookView.add($.__views.__alloyId3);
    $.__views.verticalSeparator = Ti.UI.createView({
        bottom: 0,
        left: 0,
        width: "1dp",
        height: Ti.UI.FILL,
        backgroundColor: "#2F2F2F",
        id: "verticalSeparator"
    });
    $.__views.connectWithFacebookView.add($.__views.verticalSeparator);
    $.__views.connectWithFacebookText = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "30dp"
        },
        text: L("connect_with_facebook"),
        id: "connectWithFacebookText"
    });
    $.__views.connectWithFacebookView.add($.__views.connectWithFacebookText);
    $.__views.connectWithTwitterView = Ti.UI.createView({
        color: "#FFFFFF",
        height: "50dp",
        width: "250dp",
        layout: "horizontal",
        backgroundColor: "#00BAF0",
        id: "connectWithTwitterView"
    });
    $.__views.index.add($.__views.connectWithTwitterView);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontSize: "55dp",
            fontFamily: "EntypoSocial"
        },
        color: "#FFFFFF",
        text: "",
        id: "__alloyId4"
    });
    $.__views.connectWithTwitterView.add($.__views.__alloyId4);
    $.__views.verticalSeparator = Ti.UI.createView({
        bottom: 0,
        left: 0,
        width: "1dp",
        height: Ti.UI.FILL,
        backgroundColor: "#2F2F2F",
        id: "verticalSeparator"
    });
    $.__views.connectWithTwitterView.add($.__views.verticalSeparator);
    $.__views.connectWithTwitterText = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "30dp"
        },
        text: L("connect_with_twitter"),
        id: "connectWithTwitterText"
    });
    $.__views.connectWithTwitterView.add($.__views.connectWithTwitterText);
    $.__views.connectWithGoogleView = Ti.UI.createView({
        color: "#FFFFFF",
        height: "50dp",
        width: "250dp",
        layout: "horizontal",
        backgroundColor: "#E54C32",
        id: "connectWithGoogleView"
    });
    $.__views.index.add($.__views.connectWithGoogleView);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        font: {
            fontSize: "55dp",
            fontFamily: "EntypoSocial"
        },
        color: "#FFFFFF",
        text: "",
        id: "__alloyId5"
    });
    $.__views.connectWithGoogleView.add($.__views.__alloyId5);
    $.__views.verticalSeparator = Ti.UI.createView({
        bottom: 0,
        left: 0,
        width: "1dp",
        height: Ti.UI.FILL,
        backgroundColor: "#2F2F2F",
        id: "verticalSeparator"
    });
    $.__views.connectWithGoogleView.add($.__views.verticalSeparator);
    $.__views.connectWithGoogleText = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "30dp"
        },
        text: L("connect_with_google"),
        id: "connectWithGoogleText"
    });
    $.__views.connectWithGoogleView.add($.__views.connectWithGoogleText);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("providersService");
    require("constant");
    require("componentService");
    Ti.App.Properties.getString("userToken");
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;