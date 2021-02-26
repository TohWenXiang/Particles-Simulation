class Square extends Rect {
  constructor(side = 1, filled = false) {
    super(side, side, filled);
  }
  
  draw(x = 0, y = 0) {
    super.draw();
    square(x, y, this.width);
  }
}