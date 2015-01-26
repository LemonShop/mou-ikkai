var stage;
var bg;
var bg_width  = 800;
var bg_height = 600;
var soundID = "mou ikkai";
var ikkaiTimeLength = 48 * 1000;
var thisMouIkkai;
var nextMouIkkai = 0;

window.addEventListener('resize', resize, false);

function init() {

	stage = new createjs.Stage("canvas");
	
	loadBackGround( );


	var rinSD = new createjs.Bitmap("img/RinSD.png");
	rinSD.x = 100;
	rinSD.y = 150;
	rinSD.alpha = 0;
	stage.addChild(rinSD);

	loadSound();

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);
	resize();

	mouIkkai();
}

function tick( event ) {
	if(event.runTime > nextMouIkkai){
		mouIkkai();	
		nextMouIkkai = nextMouIkkai + ikkaiTimeLength;
		thisMouIkkai = event.runTime;
	}

	stage.update();
}

function resize( ) {
	var win_height = Math.min(window.innerHeight, window.innerWidth  * 6 / 8);
	var win_width  = Math.min(window.innerWidth,  window.innerHeight * 8 / 6);

	stage.canvas.width  = win_width;
	stage.canvas.height = win_height;

	bg.setBounds(0,0, win_width,win_height);
	bg.scaleX = win_width / bg_width;
	bg.scaleY = win_height / bg_height;
}

function loadBackGround( ) {
	bg = new createjs.Bitmap("img/pink.png");
	stage.addChild(bg);
}

function loadSound () {
	createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin]);
	createjs.Sound.registerSound("sound/mou ikkai.mp3", soundID);
}

function mouIkkai() {
	createjs.Tween.get(stage.getChildAt(1), { loop: false })
		.to({ alpha: 1, y: 150 }, 500, createjs.Ease.getPowInOut(2))
		.to({ x: 100 }, 800, createjs.Ease.getPowInOut(2))
		.to({ x: 300 }, 800, createjs.Ease.getPowInOut(2))
		.to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2));

	createjs.Sound.play(soundID );
}