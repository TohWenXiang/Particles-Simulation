class Circle extends Shape {
  constructor (radius = 1, filled = false) {
    super(filled);
    this.radius = radius;
  }
  
  draw(x = 0, y = 0) {
    super.draw();
    circle(x, y, this.radius);
  }
}