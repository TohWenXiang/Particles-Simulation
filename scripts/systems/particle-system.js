class ParticleSystem {
    constructor(x = 0, y = 0, physicsSystem = new PhysicsSystem()) {
        this.x = x;
        this.y = y;
        this.physicsSystem = physicsSystem;
        this.particles = [];
    }

    createParticle(mass = 1, shape) {
        let particle;
        let deadParticles = this.getDeadParticles();

        if(deadParticles.length > 0) {
            particle = deadParticles[0];
            particle.reset();
            particle.position.x = this.x;
            particle.position.y = this.y;
        } else {
            particle = new Particle(this.x, this.y, mass, shape);

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
        particleSystem.createParticle(random(1, 5), new Circle(0, 0, 10));

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