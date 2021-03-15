/// <reference path="library/references/p5.global-mode.d.ts"/>

let physicsSystemWithgravity;
let physicsSystemWithoutgravity;
let particleSystem;
let emitter;
  
function setup() {
  createCanvas(300, 300);
  frameRate(60);

  //create a physics environment
  let gravity = createVector(0, 0.098);
  physicsSystemWithgravity = new PhysicsSystem(gravity);
  physicsSystemWithoutgravity = new PhysicsSystem();
  
  particleSystem = new ParticleSystem();
  //particleSystem = new ParticleSystem(physicsSystem);

  let emitterPos = createVector(150 , 150);
  let emitterRadius = 100;
  let emitterMass = 1;
  emitter = new Emitter(emitterPos.x, emitterPos.y, emitterMass, new Circle(emitterPos.x, emitterPos.y, emitterRadius), particleSystem);

  emitter.emitParticle();

  physicsSystemWithoutgravity.addEntity(emitter);

}

function draw() {
    background(100);
    
    physicsSystemWithgravity.update();
    
    emitter.update();

    particleSystem.update();
    particleSystem.draw();   
}