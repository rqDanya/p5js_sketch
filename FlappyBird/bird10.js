function Bird() {
	this.x = 300;
	this.y = 300;
	this.yspeed = 10;

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

	