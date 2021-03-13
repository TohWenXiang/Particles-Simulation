class Square extends Rect {
  constructor(x = 0, y = 0, side = 1) {
    super(x, y, side, side);
  }
  
  draw() {
    square(this.position.x, this.position.y, this.width);
  }
  
  getRandomPos() {
    return super.getRandomPos();
  }
}