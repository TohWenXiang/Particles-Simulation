/// <reference path="../../library/references/p5.global-mode.d.ts"/>

class Emitter {
    constructor(x = 0, y = 0, emitterShape = Shape(), particleSystem = new ParticleSystem()) {
        this.x = x;
        this.y = y;

        this.emitterShape = emitterShape;

        this.particleSystem = particleSystem;
    }

    emitParticle() {
        let particle;
        let position = this.emitterShape.getRandomPos();
        particle = this.particleSystem.createParticle(position.x, position.y, random(1, 5), new Circle(0, 0, 10));
        //particle.applyForce(random(-2, 2), random(-2, 2));
    }

    update() {
        this.emitParticle();
    }
}