// Récupération des arguments envoyés par le contrôleur Menu
var args = arguments[0] || {};

Ti.API.info('[---ColumnRow---] args: ' + args.name + ' / ' + args.rowId);


// Mise à jour de l'icône et de l'item
$.name.text = args.name;

// ajout des réseaux sociaux de la column

for(var i=0; i<args.socialNetworks.length; i++) {
	var image = Ti.UI.createImageView({
		image: "/images/" + getSocialNetworkName(args.socialNetworks[i].service) + ".png",
		width: "24px",
		height: "24px"
	});
//	$.socialNetworks.add(image);
}

// TODO: Bug Android... Récupération de rowID via title. (e.rowData.title vers e.rowData.rowId)
$.columnRow.title = args.rowId;
$.columnRow.rowId = args.rowId;


function getSocialNetworkName(unifiedRequest) {
	return unifiedRequest.split(".")[0];
}
