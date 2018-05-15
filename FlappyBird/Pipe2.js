
var t2;

function Tower2() {
	this.x = 600;
	this.y = 0;
	this.xspeed = -1;
	this.yspeed = 0;

	this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}
	this.show = function() {
		fill(255);
		rect(this.x, this.y, 15, 50);

	}
}