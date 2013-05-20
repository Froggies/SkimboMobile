/**
 * @author AudreyN
 */


/***  Url handler *******/
function getServerUrl() {
	return "http://skimbo-froggies.rhcloud.com/";
}

exports.getProvidersUrl = function() {
	return getServerUrl() + "/api/providers/list";
}

exports.getConnectUrl = function(token) {
	return getServerUrl() + "/api/mobile/connect/" + token;
}

exports.getAuthUrl = function(providerName) {
	return getServerUrl() + "/api/mobile/auth/" + providerName;
}

exports.getCommandUrl = function(token) {
	return getServerUrl() + "/api/mobile/command/" + token;
}

/******  Other contants *******/

exports.getColorForSocialNetwork = function(socialNetwork) {
	if (socialNetwork == "facebook") {
		return "#3b5998";
	}
	else if (socialNetwork == "twitter") {
		return "#00a0d1";
	}
	else if (socialNetwork == "linkedin") {
		return "#0e76a8";
	}
	else if (socialNetwork == "github") {
		return "#4183c4";
	}
	else if (socialNetwork == "googleplus") {
		return "#db4a39";
	}
	else if (socialNetwork == "scoopit") {
		return "#90D302";
	}
	else if (socialNetwork == "viadeo") {
		return "#FFC906";
	}
	else if (socialNetwork == "stackexchange") {
		return "#C47B07";
	}
	else if (socialNetwork == "trello") {
		return "#A38F8F";
	}
	else if (socialNetwork == "betaseries") {
		return "#3B8DD0";
	}
	else if (socialNetwork == "rss") {
		return "#FC8815";
	}
	else if (socialNetwork == "bitbucket") {
		return "#28649C";
	}
}
