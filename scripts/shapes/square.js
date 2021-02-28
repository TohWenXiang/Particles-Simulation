class Square extends Rect {
  constructor(side = 1, filled = false) {
    super(side, side, filled);
  }
  
  draw(x = 0, y = 0) {
    if(!this.filled) {
      noFill();
    }
    strokeWeight(1);
    stroke(255);
    square(x, y, this.width);
  }
}