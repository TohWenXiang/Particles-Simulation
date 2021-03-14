/// <reference path="../../library/references/p5.global-mode.d.ts"/>

class ParticleSystem {
    constructor(physicsSystem = new PhysicsSystem()) {
        this.physicsSystem = physicsSystem;
        this.particles = [];
    }

    createParticle(x = 0, y = 0, mass = 1, shape) {
        let particle;
        let deadParticles = this.getDeadParticles();

        if (deadParticles.length > 0) {
            particle = deadParticles[0];
            particle.reset();
            particle.position.x = x;
            particle.position.y = y;
        } else {
            particle = new Particle(x, y, mass, shape);

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