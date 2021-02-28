class Circle extends Shape {
  constructor (radius = 1, filled = false) {
    super(filled);
    this.radius = radius;
  }
  
  draw(x = 0, y = 0) {
    if(!this.filled) {
      noFill();
    }
    strokeWeight(1);
    stroke(255);
    circle(x, y, this.radius);
  }
}