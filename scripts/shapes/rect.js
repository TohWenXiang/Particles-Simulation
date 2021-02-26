class Rect extends Shape {
  constructor(width = 1, height = 1, filled = false) {
    super(filled);
    this.width = width;
    this.height = height;
  }
  
  draw(x = 0, y = 0) {
    super.draw();
    rect(x, y, this.width, this.height);
  }
}