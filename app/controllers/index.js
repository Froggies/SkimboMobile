// var providersService = require("providersService");
// var constant = require("constant");
var componentService = require("componentService");

// 
var userToken = Ti.App.Properties.getString("userToken");
// 
 var userIsConnected = userToken !== (undefined || null); 

$.connectWithFacebookView.addEventListener("click", function() {
	openWebViewConnexion("facebook");
});

$.connectWithTwitterView.addEventListener("click", function() {
	openWebViewConnexion("twitter");
});

$.connectWithGoogleView.addEventListener("click", function() {
	openWebViewConnexion("googleplus");
});

var openWebViewConnexion = function(providerName) {
	componentService.createConnectionWebView(providerName);
};

 if (_.isUndefined(userToken) || _.isNull(userToken)) {
	Ti.API.info('Dans PAS CONNECTE');
	$.index.open();
} else {
	Ti.API.info('dansCONNECT'+ userToken);
	var application = Alloy.createController('application'); 
	application.getView().open();
}


