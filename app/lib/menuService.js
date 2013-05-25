/*
 * Menu: menuShow()
 * 
 * @left (integer): Valeur pour l'ouverture ou fermeture du menu
 */
exports.menuShow = function(_left) {

	var animation = Ti.UI.createAnimation({
		left: _left,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});

	return animation;
};
