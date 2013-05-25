(function() {

	// Menu fermé par défaut
	Ti.App.Properties.setBool('menuOpen', false);

	// Data
	var data = [
		{ item: "My columns", icon: "/images/light_home.png", rowId: 1 },
		{ item: "Skimber !", icon: "/images/light_chat.png", rowId: 2 },
		{ item: "Add column", icon: "/images/light_list---add.png", rowId: 3 },
		{ item: "Settings", icon: "/images/light_gear.png", rowId: 4 }
	];


	var rowData = [];

	// Boucle pour ajouter les lignes à rowData
	for (var i = 0; i < data.length; i++) {
		var row = Alloy.createController('menuRow', data[i]).getView();		
		rowData.push(row);
	}

	// Ajout de rowData à menuList
	$.menuList.data = rowData;

	// Événement au click sur menuList
	$.menuList.addEventListener('click', function(e) {

		// TODO: Bug Android... Récupération de rowID via title. (e.rowData.title vers e.rowData.rowId)
    	var rowId = e.rowData.title;

		// Events
	    if(rowId === 1) {
	    	Ti.API.info('[---Menu---] fireEvent: SKIMBO:menuMyColumns');
	    	Ti.App.fireEvent('SKIMBO:menuMyColumns');
	    }

	    // Speakers
	    else if(rowId === 2) {
	    	Ti.API.info('[---Menu---] fireEvent: SKIMBO:menuSkimber');
	    	Ti.App.fireEvent('SKIMBO:menuSkimber');
	    }

	    // Partners
	    else if(rowId === 3) {
	    	Ti.API.info('[---Menu---] fireEvent: SKIMBO:menuAddColumn');
	    	Ti.App.fireEvent('SKIMBO:menuAddColumn');
	    }

	    // News
	    else if(rowId === 4) {
	    	Ti.API.info('[---Menu---] fireEvent: SKIMBO:menuSettings');
	    	Ti.App.fireEvent('SKIMBO:menuSettings');
	    }

		// Cache le Menu
    	Ti.App.fireEvent('SKIMBO:hideMenu');

	});
})();
