function Controller() {
    function showNotificationSection() {
        componentService.removeRowFromTableViewSection($.sectionNotifications.rowCount);
        for (var i = 0; notifications.length > i; i++) {
            var row = componentService.createRowForColumn(notifications[i].errorMessage, i, notifications.length);
            $.sectionNotifications.add(row);
        }
        $.tableView.setData($.tableView.data);
    }
    function showColumns() {
        for (var i = 0; columnsFromServer.length > i; i++) {
            var row = componentService.createRowForColumn(columnsFromServer[i].title, i, columnsFromServer.length);
            $.sectionColumns.add(row);
            columns[columnsFromServer[i].title] = columns[columnsFromServer[i].title] || [];
        }
        $.tableView.setData($.tableView.data);
        $.tableView.separatorColor = "transparent";
        $.tableView.addEventListener("click", function(e) {
            Ti.API.debug("blabla");
            var columnTitle = e.row.children[0].text;
            Ti.API.debug("test " + columnTitle);
            columns[columnTitle];
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.allColumns = Ti.UI.createWindow({
        backgroundColor: "#d8d8d8",
        id: "allColumns"
    });
    $.__views.allColumns && $.addTopLevelView($.__views.allColumns);
    $.__views.sectionColumns = Ti.UI.createTableViewSection({
        headerTitle: "Columns",
        id: "sectionColumns"
    });
    var __alloyId0 = [];
    __alloyId0.push($.__views.sectionColumns);
    $.__views.sectionNotifications = Ti.UI.createTableViewSection({
        headerTitle: "Notifications",
        id: "sectionNotifications"
    });
    __alloyId0.push($.__views.sectionNotifications);
    $.__views.tableView = Ti.UI.createTableView({
        data: __alloyId0,
        id: "tableView"
    });
    $.__views.allColumns.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var commandService = require("commandService");
    var componentService = require("componentService");
    var columns = {};
    var columnsFromServer = [];
    var isColumnSet = false;
    var notifications = [];
    var columnViewIsOpenned = false;
    commandService.on("allColumns", function(response) {
        if (false == isColumnSet) {
            isColumnSet = true;
            columnsFromServer = response.body;
            true == columnViewIsOpenned && showColumns();
        }
    });
    commandService.on("msg", function(response) {
        var body = response.body;
        columns[body.column] = columns[body.column] || [];
        columns[body.column].push(body.msg);
    });
    commandService.on("tokenInvalid", function(response) {
        notifications.push({
            errorMessage: "Token invalid for provider : " + response.body.providerName
        });
        showNotificationSection();
    });
    $.allColumns.addEventListener("open", function() {
        columnViewIsOpenned = true;
        showColumns();
    });
    commandService.connectWithSkimbo();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;