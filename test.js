var stage;
var bg;
var bg_width  = 800;
var bg_height = 600;

window.addEventListener('resize', resize, false);

function init() {

	stage = new createjs.Stage("demoCanvas");
	
	createBackGround( stage );


	var rinSD = new createjs.Bitmap("img/RinSD.png");
	rinSD.x = 100;
	rinSD.y = 150;
	stage.addChild(rinSD);

	createjs.Tween.get(rinSD, { loop: true })
		.to({ x: 300 }, 800, createjs.Ease.getPowInOut(2))
		.to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
		.to({ alpha: 0, y: 125 }, 100)
		.to({ alpha: 1, y: 150 }, 500, createjs.Ease.getPowInOut(2))
		.to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

//	createjs.Ticker.useRAF = true;
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);
	resize();		
}

function tick() {
	stage.update();
}

function resize( ) {
	var win_height = Math.min(window.innerHeight, window.innerWidth * 6 / 8);
	var win_width  = Math.min(window.innerWidth,  window.innerHeight * 8 / 6);

	stage.canvas.width  = win_width;
	stage.canvas.height = win_height;

	bg.setBounds(0,0, win_width,win_height);
	bg.scaleX = win_width / bg_width;
	bg.scaleY = win_height / bg_height;
}

function createBackGround( ) {
	bg = new createjs.Bitmap("img/pink.png");
	stage.addChild(bg);
}
