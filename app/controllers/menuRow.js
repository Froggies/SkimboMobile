// Récupération des arguments envoyés par le contrôleur Menu
var args = arguments[0] || {};

Ti.API.info('[---MenuRow---] args: ' + args.item + ' / ' + args.rowId);


// Mise à jour de l'icône et de l'item
$.icon.image = args.icon;
$.item.text = args.item;

// TODO: Bug Android... Récupération de rowID via title. (e.rowData.title vers e.rowData.rowId)
$.menuRow.title = args.rowId;
$.menuRow.rowId = args.rowId;
