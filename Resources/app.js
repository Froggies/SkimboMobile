var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var menuWindowController = Alloy.createController("menu");

menuWindowController.getView().open();

Alloy.createController("index");