
function init() {
	var stage = new createjs.Stage("demoCanvas");
	var rinSD = new createjs.Bitmap("img/rinn02a.png");
	rinSD.x = 100;
	rinSD.y = 150;
	stage.addChild(rinSD);

	createjs.Tween.get(rinSD, { loop: true })
		.to({ x: 300 }, 800, createjs.Ease.getPowInOut(2))
		.to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
		.to({ alpha: 0, y: 125 }, 100)
		.to({ alpha: 1, y: 150 }, 500, createjs.Ease.getPowInOut(2))
		.to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);		
}