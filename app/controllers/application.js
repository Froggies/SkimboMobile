var commandService = require("commandService");

var menuService = require("menuService");

/*
 * Menu
 */
Ti.App.addEventListener("SKIMBO:menuOpen", function(e) {

	// Fermeture du menu
	if(Ti.App.Properties.getBool('menuOpen')) {
		$.applicationWindow.animate(menuService.menuShow(0));
		Ti.App.Properties.setBool('menuOpen', false);
	} 

	// Ouverture du menu
	else {		
		$.applicationWindow.animate(menuService.menuShow(Alloy.CFG.menuWidth));
		Ti.App.Properties.setBool('menuOpen', true);		
	}
});

commandService.connectWithSkimbo();