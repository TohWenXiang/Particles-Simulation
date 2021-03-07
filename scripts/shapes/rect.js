class Rect extends Shape {
  constructor(x = 0, y = 0, width = 1, height = 1) {
    super(x, y);
    this.width = width;
    this.height = height;
  }
  
  draw() {
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}