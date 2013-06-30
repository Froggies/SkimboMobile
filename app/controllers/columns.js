(function() {
	var commandService = require("commandService");
	
	var columns = {};

	var columnsFromServer = [];

	var data = [];
	
	var isColumnSet = false;

	commandService.on("allColumns", function(response) {
		if (isColumnSet == false) {
			isColumnSet = true;
			columnsFromServer = response.body;
			init();
		}
		
	});
	
	function init() {
		for(var i=0; i<columnsFromServer.length; i++) {
			//var row = componentService.createRowForColumn(columnsFromServer[i].title, i, columnsFromServer.length);
			//$.sectionColumns.add(row);
			var obj = {name: columnsFromServer[i].title, socialNetworks: columnsFromServer[i].unifiedRequests, rowId:i};
			data.push(obj);
			columns[columnsFromServer[i].title] = columns[columnsFromServer[i].title] || [];
		}
	
		var rowData = [];
	
		// Boucle pour ajouter les lignes à rowData
		for (var i = 0; i < data.length; i++) {
			var row = Alloy.createController('columnRow', data[i]).getView();		
			rowData.push(row);
		}
	
		// Ajout de rowData à columnList
		$.columnsList.data = rowData;
	
		// Événement au click sur menuList
		$.columnsList.addEventListener('click', function(e) {
	
			// TODO: Bug Android... Récupération de rowID via title. (e.rowData.title vers e.rowData.rowId)
	    	var rowId = e.rowData.title;
			
		});
	}
	
	
})();
