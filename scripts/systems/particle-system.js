class ParticleSystem {
    constructor(physicsSystem = new PhysicsSystem()) {
        this.physicsSystem = physicsSystem;
        this.particles = [];
    }

    createParticle(x = 0, y = 0, mass = 1, shape) {
        let particle = new Particle(x, y, mass, shape);

        //add to particles list
        this.addParticle(particle);
    }

    addParticle(particle) {
        this.particles.push(particle);
        this.physicsSystem.addEntity(particle);
    }
    
    update() {
      this.particles.forEach(particle => {
        particle.update();
      });
    }
    
    draw() {
        this.particles.forEach(particle => {
            particle.draw();
        });
    }
}