class Emitter {
    constructor(x = 0, y = 0, emitterShape = new Shape(), physicsSystem = new PhysicsSystem()) {
        this.x = x;
        this.y = y;
        
        this.emitterShape = emitterShape;
        
        this.physicsSystem = physicsSystem;
        this.particles = [];
    }

    createParticle(mass = 1, shape) {
        let particle;
        let particlePosition = this. emitterShape.getRandomPos();
        
        let deadParticles = this.getDeadParticles();

        if(deadParticles.length > 0) {
            particle = deadParticles[0];
            particle.reset();
            particle.position.x = particlePosition.x;
            particle.position.y = particlePosition.y;
        } else {
            particle = new Particle(particlePosition.x, particlePosition.y, mass, shape);

            //add to particles list
            this.addParticle(particle);
        }
        
        particle.applyForce(random(-2, 2), 0);
    }

    addParticle(particle) {
        this.particles.push(particle);
        this.physicsSystem.addEntity(particle);
    }

    getDeadParticles() {
        return this.particles.filter(particle => particle.isDead === true);
    }

    update() {
        this.createParticle(random(1, 5), new Circle(0, 0, 10));

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