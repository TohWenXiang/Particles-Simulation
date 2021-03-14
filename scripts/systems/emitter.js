/// <reference path="../../library/references/p5.global-mode.d.ts"/>

class Emitter {
    constructor(x = 0, y = 0, emitterShape = Shape(), particleSystem = new ParticleSystem()) {
        this.x = x;
        this.y = y;

        this.emitterShape = emitterShape;

        this.particleSystem = particleSystem;
    }

    emitParticle() {
        let position = this.emitterShape.getRandomPos();
        this.particleSystem.createParticle(position.x, position.y, random(1, 5), new Circle(0, 0, 10));
    }

    update() {
        this.emitParticle();
    }
}