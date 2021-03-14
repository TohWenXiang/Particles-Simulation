/// <reference path="library/references/p5.global-mode.d.ts"/>

let physicsSystem;
let particleSystem;
let emitter;
  
function setup() {
  createCanvas(300, 300);
  frameRate(60);

  //create a physics environment
  let gravity = createVector(0, 0.098);
  physicsSystem = new PhysicsSystem(gravity);
  
  particleSystem = new ParticleSystem();

  let emitterPos = createVector(150, 150);
  let emitterRadius = 100;
  emitter = new Emitter(emitterPos.x, emitterPos.y, new Circle(emitterPos.x, emitterPos.y, emitterRadius), particleSystem);
  emitter.emitParticle();
}

function draw() {
    background(200);
    
    physicsSystem.update();
    
    emitter.update();

    particleSystem.update();
    particleSystem.draw();

    
    
}