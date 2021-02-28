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

    createParticles(x = 0, y = 0, mass = 1, shapeList = [], count = 1) {
        let particle;
        for (let i = 0; i < count; i++) {
            particle = new Particle(x, y, mass, random(shapeList));
            this.addParticle(particle);
        }
    }

    addParticle(particle) {
        this.particles.push(particle);
        this.physicsSystem.addEntity(particle);
    }
    
    draw() {
        this.particles.forEach(particle => {
            particle.draw();
        });
    }
}