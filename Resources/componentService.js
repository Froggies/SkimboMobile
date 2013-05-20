var constant = require("constant");

exports.createRowForMessages = function(label, index, listSize, socialNetwork) {
    var row = Ti.UI.createTableViewRow({
        className: "tableRow",
        height: 110,
        backgroundColor: "white"
    });
    var labelSocialNetwork = Ti.UI.createLabel({
        color: constant.getColorForSocialNetwork(socialNetwork),
        text: socialNetwork,
        left: -16
    });
    labelSocialNetwork.transform = Ti.UI.create2DMatrix().rotate(-90);
    var image = Ti.UI.createImageView({
        image: "/images/socialNetworkLine.png",
        backgroundColor: "blue",
        left: 24,
        top: 0
    });
    var labelDetails = Ti.UI.createLabel({
        color: "#222",
        font: {
            fontFamily: "Arial",
            fontWeight: "normal"
        },
        text: label,
        left: 70,
        top: 44,
        width: 360
    });
    row.add(labelSocialNetwork);
    row.add(image);
    row.add(labelDetails);
    return row;
};

exports.createRowForColumn = function(label) {
    var row = Ti.UI.createTableViewRow({
        className: "tableRow",
        height: 110,
        backgroundColor: "white"
    });
    var labelDetails = Ti.UI.createLabel({
        color: "#222",
        font: {
            fontFamily: "Arial",
            fontWeight: "normal"
        },
        text: label,
        left: 70,
        top: 44,
        width: 360
    });
    row.add(labelDetails);
    return row;
};

exports.createConnectionWebView = function(providerName) {
    Ti.API.debug("webview url => " + constant.getAuthUrl(providerName));
    var connectionWindow = Titanium.UI.createWindow();
    var webview = Titanium.UI.createWebView({
        url: constant.getAuthUrl(providerName)
    });
    connectionWindow.add(webview);
    connectionWindow.open({
        modal: true
    });
    webview.addEventListener("load", function() {
        var cookies = webview.evalJS("document.cookie").split(";");
        for (i = 0; cookies.length - 1 >= i; i++) {
            var tabCookie = cookies[i].trim().split("=");
            if ("tokenSkimbo" == tabCookie[0]) {
                var tabController = Alloy.createController("tab");
                tabController.getView().open();
                Ti.App.Properties.setString("userToken", tabCookie[1]);
                connectionWindow.close();
            }
        }
    });
};

exports.removeRowFromTableViewSection = function(rowCount) {
    for (var i = 0; rowCount > i; i++) tableViewSection.remove(i);
};