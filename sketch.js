/// <reference path="library/references/p5.global-mode.d.ts"/>

let particleSystem;
let emitter;
  
function setup() {
  createCanvas(300, 300);
  frameRate(60);
  
  particleSystem = new ParticleSystem();

  let emitterPos = createVector(150 , 150);
  let emitterRadius = 100;
  let emitterMass = 1;
  emitter = new Emitter(emitterPos.x, emitterPos.y, emitterMass, new Circle(emitterPos.x, emitterPos.y, emitterRadius), particleSystem);

  emitter.emitParticle();
}

function draw() {
    background(0);
    
    emitter.update();

    particleSystem.update();
    particleSystem.draw();   
}