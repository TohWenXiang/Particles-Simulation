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
  //particleSystem = new ParticleSystem(physicsSystem);

  let emitterPos = createVector(150 , 150);
  let emitterRadius = 100;
  let emitterMass = 1;
  emitter = new Emitter(emitterPos.x, emitterPos.y, emitterMass, new Square(emitterPos.x, emitterPos.y, emitterRadius), particleSystem);
  emitter.emitParticle();
  physicsSystem.addEntity(emitter);
}

function draw() {
    background(100);
    
    physicsSystem.update();
    
    emitter.update();

    particleSystem.update();
    particleSystem.draw();

    
    
}