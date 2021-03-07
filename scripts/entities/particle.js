class Particle extends Entity {
  constructor(x = 0, y = 0, mass = 1, shape = new Shape()) {
    super(x, y, mass);
    this.shape = shape;
  }
  
  update() {
    super.update();
    this.shape.position = this.position; 
  }
  
  draw() {
    
    noFill();
    strokeWeight(1);
    stroke(255);
    this.shape.draw();
  }
}