var providersService = require("providersService");
var constant = require("constant");
var componentService = require("componentService");

var userToken = Ti.App.Properties.getString("userToken");

var userIsConnected = userToken != undefined;

var menuWindowController = Alloy.createController('menu');
menuWindowController.getView().open(); 


if (userIsConnected == true) {
	var applicationController = Alloy.createController('application'); 
	applicationController.getView().open();
} else {
	providersService.getAllConnectionProviders(function(data){
		var dataTransformed = [];
		for(var i=0; i<data.length; i++) {
			dataTransformed.push({id: data[i].name, click: function (e) { 
					componentService.createConnectionWebView(this.id);
					userIsConnected = true;
			}});
		}
		$.connectionProviders.init({
		    buttons: dataTransformed,
		    buttonWidth: Alloy.isTablet ? 200: 100,
		    buttonHeight: Alloy.isTablet ? 200 : 100,
		    backgroundColor: 'white',
		    backgroundSelectedColor: 'white'
		});
	});
	$.index.open();
}

