(function (lib, img, cjs) {

	var p; //shourtcut to reference prototypes

	lib.properties = {
		width: 960,
		height: 600,
		fps: 60,
		color: "#999",
		manifest: [
			{src:"img/dove.png", id:"Symbol"},
		],
	};

	(lib.Symbol = function() {
		this.initialize(img.Symbol);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,128,128);

	(lib.MyGame = function(mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {})
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,960,600);
})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;