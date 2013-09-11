// var commandService = require("commandService");
// var componentService = require("componentService");
// 
// var columns = {};
// 
// var columnsFromServer = [];
// 
// var isColumnSet = false;
// 
// var notifications = [];
// 
// var columnViewIsOpenned = false;
// 
// commandService.on("allColumns", function(response) {
	// if (isColumnSet == false) {
		// isColumnSet = true;
		// columnsFromServer = response.body;
		// if (columnViewIsOpenned == true) {
			// showColumns();
		// }
	// }
// 	
// });
// 
// commandService.on("msg", function(response) {
	// var body = response.body;
	// columns[body.column] = columns[body.column] || [];
	// columns[body.column].push(body.msg);
// });
// 
// commandService.on("tokenInvalid", function(response) {
	// // notifications.push({errorMessage: "Token invalid for provider : "+response.body.providerName});
	// // showNotificationSection();
// });
// // 
// // function showNotificationSection() {
	// // componentService.removeRowFromTableViewSection($.sectionNotifications.rowCount);
	// // for(var i=0; i<notifications.length; i++) {
		// // var row = componentService.createRowForColumn(notifications[i].errorMessage, i, notifications.length);
		// // $.sectionNotifications.add(row);
	// // }
	// // $.tableView.setData($.tableView.data);	
// // }
// 
// function showColumns() {
	// for(var i=0; i<columnsFromServer.length; i++) {
		// var row = componentService.createRowForColumn(columnsFromServer[i].title, i, columnsFromServer.length);
		// $.sectionColumns.add(row);
		// columns[columnsFromServer[i].title] = columns[columnsFromServer[i].title] || [];
	// }
// 	
	// $.tableView.setData($.tableView.data);	
	// $.tableView.separatorColor = 'transparent';
// 
	// $.tableView.addEventListener('click', function(e) {
			// Ti.API.debug("blabla");
		// var columnTitle = e.row.children[0].text;
		// Ti.API.debug("test "+columnTitle);
		// var msg = columns[columnTitle];
	// });
// }
// 
// $.allColumns.addEventListener("open", function() {
	// columnViewIsOpenned = true;
	// showColumns();
// });
// 
// commandService.connectWithSkimbo();
// 
// 
