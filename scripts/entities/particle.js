class Particle extends Entity {
  constructor(x = 0, y = 0, mass = 1, shape = new Shape()) {
    super(x, y, mass);
    this.shape = shape;
  }
  
  update() {
    super.update();
  }
  
  draw() {
    this.shape.draw(this.position.x, this.position.y);
  }
}