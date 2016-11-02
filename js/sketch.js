var bubbles = [];

var Bubble = function(x, y) {

  this.x = x;
  this.y = y;
  this.speedX = 20;
  this.speedY = 0;
  this.acceleration = 0.12;

  this.display = function() {
    stroke(random(255), 0 , random(255));
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 25, 25);
  }

  this.move = function() {

    this.speedY += this.acceleration;

    this.x += this.speedX;
    this.y += this.speedY;
  }

  this.bounce = function() {
    if(this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
  }

};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255, 0);

  for(var i = 0; i < bubbles.length; i ++) {
    bubbles[i].display();
    bubbles[i].bounce();
    bubbles[i].move();

    if(bubbles[i].y > height) {
      bubbles.splice(i, 1);
      i--;
    }
  }

}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}
