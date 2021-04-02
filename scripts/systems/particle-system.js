/// <reference path="../../library/references/p5.global-mode.d.ts"/>

class ParticleSystem {
    constructor(physicsSystem = new PhysicsSystem()) {
        this.physicsSystem = physicsSystem;
        this.particles = [];
    }

    createParticle(x = 0, y = 0, mass = 1, shape) {
        //get a dead particle or create a new one
        let particle = this.getDeadParticle() ?? new Particle(x, y, mass, shape);

        //reset the dead particle
        if (particle.isDead) {
            particle.reset();
            particle.position.x = x;
            particle.position.y = y;
        } else {
            //otherwise store the new particle
            this.addParticle(particle);
        }
        return particle;
    }

    addParticle(particle) {
        this.particles.push(particle);
        this.physicsSystem.addEntity(particle);
    }

    getDeadParticle() {
        return this.particles.filter(particle => particle.isDead)[0];
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