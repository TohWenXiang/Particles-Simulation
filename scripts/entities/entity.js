class Entity {
  constructor(x = 0, y = 0, mass = 1) {
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    
    this.mass = mass;
  }
  
  applyForce(x = 0, y = 0) {
    let F = createVector(x, y);//force.copy();
    this.acceleration = F.div(this.mass);
  }

  reset() {
    this.position.mult(0);
    this.velocity.mult(0);
    this.acceleration.mult(0);
  }
  
  update() {
    
  }

  draw() {

  }
}