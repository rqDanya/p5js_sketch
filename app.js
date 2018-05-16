var bird;
var topTower;
var bottomTower;
var d;

function setup() {
	createCanvas(600, 600);
	bird = new Bird();
	topTower = new TopTower();
	bottomTower = new BottomTower();
}

function draw() {
	background(10);
	bird.show();
	bird.update();
	topTower.update();
	topTower.show();
	bottomTower.update();
	bottomTower.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		bird.dir(0, -60);
	}
}

function TopTower() {
	this.x = 600
	this.xspeed = -5;

	this.update = function() {
		this.x = this.x + this.xspeed;

		if (this.x <= 0) {
			this.x = 600;
			d = Math.floor(Math.random() * 201);
		}
	}
	
	this.show = function() {
		fill(300);
		rect(this.x, 0, 15, 50 + d);
	}
}

function BottomTower() {
	this.x = 600;
	this.xspeed = -5;

	this.update = function() {
		this.x = this.x + this.xspeed;

		if (this.x <= 0) {
			this.x = 600;
		}
	}

	this.show = function() {
		fill(300);
		rect(this.x, d + 150, 15, 550 - d);
	}
}

function Bird() {
	this.x = 300;
	this.y = 300;
	this.yspeed = 5;

	this.dir = function(x, y) {
    	this.xspeed = x;
    	this.y += y;
	}

	this.show = function() {
		fill(255);
		rect(this.x, this.y, 20, 20);
	}

	this.update = function() {
		this.y = this.y + this.yspeed;
		 
		 if (this.y >= 590) {
		 	this.y = 590;
		 	this.yspeed = 0;
		 }
	}
}
