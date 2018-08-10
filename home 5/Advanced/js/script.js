// // game
// //player
// //side
// //buller

(function () {
	function Game (canvasId){
		var canvas = document.getElementById(canvasId);
		var screen = canvas.getContext('2d');
		var gameSize = {
			width: canvas.width,
			height: canvas.height
		}


      var self = this;
      
  this.enteties = [new Player(this,gameSize,Map)];

		var gameLoop = function(){

        self.update(self,gameSize);
        self.render(screen,gameSize);
           
			requestAnimationFrame(gameLoop);//14 ms
			
		}
		gameLoop()
  
		console.log('Game started');
	}
	Game.prototype = {
		update: function() {
			for (var i = 0; i < this.enteties.length; i++) {
				this.enteties[i].update();
			}
		},

		render:function(screen,gameSize){
        clearCanvas(screen, gameSize)
        Map() 
        for (var i = 0; i < this.enteties.length; i++) {
            renderRect(screen,this.enteties[i])
        }
		}
	};
	function Player (game, gameSize,map){
		this.game = game;
		this.size = {
			width: 25,
			height: 25
		};
        this.position = {
            x: gameSize.width/2 - this.size.width/2,
            y: gameSize.height - this.size.height - 10
        };
        this.Keylogger = new Keylogger();
         
	}
	Player.prototype = {
		update: function(){
       if(this.position.x < 0){
            this.position.x = 625 - this.size.width;
        }
        if (this.position.x  >  625 - this.size.width) {
            this.position.x = 0;
        }
        if (this.position.y <  0) {
            this.position.y = 625 - this.size.width;
        }
        if (this.position.y > 625- this.size.width) {
            this.position.y = 0;
        }

        if(this.Keylogger.isDown(this.Keylogger.KEYS.LEFT)){
            this.position.x -=2;
        }
        if(this.Keylogger.isDown(this.Keylogger.KEYS.RIGHT)){
            this.position.x +=2;
        }
        if(this.Keylogger.isDown(this.Keylogger.KEYS.DOWN)){
            this.position.y -=2;
        }
        if(this.Keylogger.isDown(this.Keylogger.KEYS.UP)){
            this.position.y +=2;
        }
       
        for (var i = 0; i < mapArr.length; i++) {
        	for (var j = 0; j < mapArr[i].length; j++) {
        		if (mapArr[i][j] == 1) {
        			
        		}
        	}
        }
		}

	}

    var Keylogger = function(){
        var keyState = {};
        window.onkeydown =function(e){
            keyState[e.keyCode] = true;
        }
        window.onkeyup = function(e){
            keyState[e.keyCode] = false;
        }

       this.isDown = function(keyCode){
          return  keyState[keyCode] === true;
       } 
       this.KEYS = {
        LEFT: 37,
        UP:40,
        RIGHT:39,
        DOWN:38,
        SPACE:32,
       }
    }
    // function Side(game,screen){
    //  this.size = {
    //     x: width 50,
    //     y: height 50
    //  } 
    // }

    // Side.prototype = function(){
    //     update: function(){

    //     }
    // };
    function clearCanvas (screen,gameSize){
        screen.clearRect(0,0, gameSize.width,gameSize.height)
    }
    function renderRect(screen,entety){
        screen.fillRect(entety.position.x, entety.position.y, entety.size.width, entety.size.height);
    }

var mapArr =[
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 3, 3, 3, 1, 1, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [3, 3, 3, 3, 1, 1, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
      [3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
      [2, 2, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0]
    ]
function Map(){
var canvas = document.getElementById('map');
var screen = canvas.getContext('2d');



var grass = new Image();
var side = new Image();
var water = new Image();
var steel = new Image();



grass.src = 'forest.png';
side.src = 'brick.png';
water.src = 'water.png';
steel.src = 'steel.png';

var posX = 0;
var posY = 0;

for (var i = 0; i < mapArr.length; i++) {
    for (var j = 0; j <  mapArr[i].length; j++) {
        if (mapArr[i][j] == 0) {
            screen.drawImage(grass, posX, posY,24,24);
        }
        if (mapArr[i][j] == 1) {
            screen.drawImage(side, posX, posY,24,24);
        }
        if (mapArr[i][j] == 2) {
            screen.drawImage(water, posX, posY,24,24);
        }
        if (mapArr[i][j] == 3) {
            screen.drawImage(steel, posX, posY,24,24);
        }
        if (mapArr[i][j] == 4) {
            screen.drawImage(grass, posX, posY,24,24);
        }
        posX += 24;
    } 
    posX = 0;
    posY += 24;
}
}
	window.onload = function(){
		new Game("map");
	}


})()