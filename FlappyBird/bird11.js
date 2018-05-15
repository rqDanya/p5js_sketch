var b;
var t;
var t2;
var d = random(150, 450);


function setup() {
	createCanvas(600, 600);
	b = new Bird();
	t = new Tower();
	t2 = new Tower2();
}

function draw() {
	background(10);
	b.show();
	b.update();
	t.update();
	t.show();
	t2.update();
	t2.show();
	


}
	

function keyPressed() {
  if (keyCode === UP_ARROW) {
    b.dir(0, -60);
 }
}
  

 


function Tower() {
	this.x = 600
	this.y = d - 40 ;
	this.xspeed = -5;
	this.yspeed = 0;

	this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;


		if (this.x <= 0) {
			this.x = 600;
			this.y = random(300, 600);
		}
	//	this.x = constrain(this.x, 0, width-15);
	}
	

	this.show = function() {
		fill(300);
		rect(this.x, this.y, 15, 300);

	}


	if (this.x == 0) {
		this.update2 = function(){
			this.x = 0
		}
      }
}

function Tower2() {
	this.x = 600;
	this.y = d - 40;
	this.xspeed = -5;
	this.yspeed = 0;

	this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		if (this.x <= 0) {
			this.x = 600;
			this.y = random(-250, 0);
		}

		//this.x = constrain(this.x, 0, width-15);
	}
	this.show = function() {
		fill(300);
		rect(this.x, this.y, 15, 300);
	}
}	

