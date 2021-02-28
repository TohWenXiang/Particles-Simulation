class Rect extends Shape {
  constructor(width = 1, height = 1, filled = false) {
    super(filled);
    this.width = width;
    this.height = height;
  }
  
  draw(x = 0, y = 0) {
    if(!this.filled) {
      noFill();
    }
    strokeWeight(1);
    stroke(255);
    rect(x, y, this.width, this.height);
  }
}