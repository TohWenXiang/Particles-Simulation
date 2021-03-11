class Particle extends Entity {
  constructor(x = 0, y = 0, mass = 1, shape = new Shape()) {
    super(x, y, mass);
    this.shape = shape;
    this.isDead = false;
    this.maxLifespan = 255;
    this.currentLifespan = this.maxLifespan;
    this.decayRate = 4;
  }

  update() {
    if(this.isDead) return;

    super.update();
    this.shape.position = this.position; 

    this.currentLifespan -= this.decayRate;

    if(this.currentLifespan <= 0) {
      this.isDead = true;
    }
  }
  
  draw() {
    if(this.isDead) return;

    noStroke();
    fill(this.currentLifespan);
    this.shape.draw();
  }
}