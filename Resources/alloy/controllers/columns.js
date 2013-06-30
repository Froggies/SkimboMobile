function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.columns = Ti.UI.createView({
        id: "columns"
    });
    $.__views.columns && $.addTopLevelView($.__views.columns);
    $.__views.columnsList = Ti.UI.createTableView({
        left: 0,
        width: Alloy.CFG.menuWidth,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        separatorColor: "#1c252b",
        id: "columnsList"
    });
    $.__views.columns.add($.__views.columnsList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    (function() {
        function init() {
            for (var i = 0; columnsFromServer.length > i; i++) {
                var obj = {
                    name: columnsFromServer[i].title,
                    socialNetworks: columnsFromServer[i].unifiedRequests,
                    rowId: i
                };
                data.push(obj);
                columns[columnsFromServer[i].title] = columns[columnsFromServer[i].title] || [];
            }
            var rowData = [];
            for (var i = 0; data.length > i; i++) {
                var row = Alloy.createController("columnRow", data[i]).getView();
                rowData.push(row);
            }
            $.columnsList.data = rowData;
            $.columnsList.addEventListener("click", function(e) {
                e.rowData.title;
            });
        }
        var commandService = require("commandService");
        var columns = {};
        var columnsFromServer = [];
        var data = [];
        var isColumnSet = false;
        commandService.on("allColumns", function(response) {
            if (false == isColumnSet) {
                isColumnSet = true;
                columnsFromServer = response.body;
                init();
            }
        });
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;