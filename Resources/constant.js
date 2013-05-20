function getServerUrl() {
    return "http://skimbo-froggies.rhcloud.com/";
}

exports.getProvidersUrl = function() {
    return getServerUrl() + "/api/providers/list";
};

exports.getConnectUrl = function(token) {
    return getServerUrl() + "/api/mobile/connect/" + token;
};

exports.getAuthUrl = function(providerName) {
    return getServerUrl() + "/api/mobile/auth/" + providerName;
};

exports.getCommandUrl = function(token) {
    return getServerUrl() + "/api/mobile/command/" + token;
};

exports.getColorForSocialNetwork = function(socialNetwork) {
    if ("facebook" == socialNetwork) return "#3b5998";
    if ("twitter" == socialNetwork) return "#00a0d1";
    if ("linkedin" == socialNetwork) return "#0e76a8";
    if ("github" == socialNetwork) return "#4183c4";
    if ("googleplus" == socialNetwork) return "#db4a39";
    if ("scoopit" == socialNetwork) return "#90D302";
    if ("viadeo" == socialNetwork) return "#FFC906";
    if ("stackexchange" == socialNetwork) return "#C47B07";
    if ("trello" == socialNetwork) return "#A38F8F";
    if ("betaseries" == socialNetwork) return "#3B8DD0";
    if ("rss" == socialNetwork) return "#FC8815";
    if ("bitbucket" == socialNetwork) return "#28649C";
};