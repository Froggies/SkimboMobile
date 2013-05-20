/**
 * @author AudreyN
 */

var constant = require("constant");

var callbacks = {};

exports.on = function(type, callback) {
	callbacks[type] = callbacks[type] || [];
	callbacks[type].push(callback);
}

exports.connectWithSkimbo = function() {
	var userToken = Ti.App.Properties.getString("userToken");
	var url = constant.getConnectUrl(userToken);
		var xhr = Ti.Network.createHTTPClient({
		    onerror: function(e) {
		        Ti.API.debug('connectWithSkimbo => '+e.error);
		    }
		});
		xhr.ondatastream = function(d) {
			Ti.API.debug("connectWithSkimbo ondatastream => response "+d.blob.text);
			var responseWithoutDataString = d.blob.text.substring(5, d.blob.text.length);
			var response = JSON.parse(responseWithoutDataString);
			if(response.cmd == 'ping') {
				sendPong(userToken);
			}
			else if(callbacks[response.cmd] != undefined) {
				for(var i=0; i< callbacks[response.cmd].length; i++) {
					callbacks[response.cmd][i](response);
				}
			} else {
				Ti.API.debug("Unimplemented method : "+ response.cmd);	
			}
		}
		xhr.open("GET", url);
		xhr.send();  
}

function sendPong(userToken) {
	var url = constant.getCommandUrl(userToken);
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("POST", url);
	xhr.send({'cmd':'pong'});
}