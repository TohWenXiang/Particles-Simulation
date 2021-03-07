class Circle extends Shape {
  constructor (x = 0, y = 0, radius = 1) {
    super(x, y);
    this.radius = radius;
  }
  
  draw() {
    circle(this.position.x, this.position.y, this.radius);
  }
}