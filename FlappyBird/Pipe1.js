var t;
var t2;



function setup() {
	t = new Tower();
	t2 = new Tower2();
	
}

function draw() {
	background(2);
	t.update();
	t.show();
	t2.update();
	t2.show();
}

function Tower() {
	this.x = 600
	this.y = 100
	this.xspeed = -5;
	this.yspeed = 0;

	this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;


		if (this.x <= 0) {
			this.x = 600
		}
	//	this.x = constrain(this.x, 0, width-15);
	}
	

	this.show = function() {
		fill(300);
		rect(this.x, this.y, 15, 1500);

	}


	if (this.x == 0) {
		this.update2 = function(){
			this.x = 0
		}
      }
}

function Tower2() {
	this.x = 600;
	this.y = 0;
	this.xspeed = -5;
	this.yspeed = 0;

	this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		if (this.x <= 0) {
			this.x = 600
		}

		//this.x = constrain(this.x, 0, width-15);
	}
	this.show = function() {
		fill(300);
		rect(this.x, this.y, 15, 50);
	}
}	

