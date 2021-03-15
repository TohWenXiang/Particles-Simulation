/// <reference path="../../library/references/p5.global-mode.d.ts"/>

class Emitter extends Entity{
    constructor(x = 0, y = 0, mass = 1, emitterShape = Shape(), particleSystem = new ParticleSystem()) {
        super(x, y, mass);

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
        this.emitterShape.position = this.position;
        this.emitParticle();
    }
}