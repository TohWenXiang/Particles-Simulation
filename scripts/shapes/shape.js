class Shape {
  constructor(filled = false) {
    this.filled = filled;
  }
  
  draw() {
    if(!this.filled) {
      noFill();
    }
    strokeWeight(1);
    stroke(255);
  }
}