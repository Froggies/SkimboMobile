$.windowTitle.text =  "test";

$.navigationButton.addEventListener("click", function(e) {
	Ti.API.info("[---Event---] Menu open : " + Ti.App.Properties.getBool('menuOpen'));
	Ti.App.fireEvent("SKIMBO:menuOpen");
});


