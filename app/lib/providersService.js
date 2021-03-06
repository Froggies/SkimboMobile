/**
 * @author AudreyN
 */

var constant = require("constant");

exports.getAllConnectionProviders = function(onload) {
	var url = constant.getProvidersUrl();
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	        Ti.API.debug("providersService => getAllConnectionProviders "+this.responseText);
	        onload(JSON.parse(this.responseText));
	    },
	    onerror: function(e) {
	        Ti.API.debug("providersService => getAllConnectionProviders "+e.error);
	    },
	    timeout:20000 
	});
	xhr.open("GET", url);
	xhr.send(); 
}

exports.transformProvidersToButtonList = function() {
	alert(this.getAllConnectionProviders());
}

