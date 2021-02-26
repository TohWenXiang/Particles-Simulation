class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    createParticle(x = 0, y = 0, mass = 1, shape) {
        let particle = new Particle(x, y, mass, shape);

        //add to particles list
        this.addParticle(particle);
    }

    addParticle(particle) {
        this.particles.push(particle);
    }

    addParticles(particles = []) {
        particles.forEach(particle => {
            this.addParticle(particle);
        });
    }

    draw() {
        this.particles.forEach(particle => {
            particle.draw();
        });
    }
}