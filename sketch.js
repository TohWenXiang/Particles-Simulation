/// <reference path="library/references/p5.global-mode.d.ts"/>

let physicsSystem;
let particleSystem;
  
function setup() {
  createCanvas(300, 300);
  frameRate(60);

  //create a physics environment
  let gravity = createVector(0, 0.098);
  physicsSystem = new PhysicsSystem(gravity);

  //create some particles
  particleSystem = new ParticleSystem();

  for (let i = 0; i < 100; i++) {
    particleSystem.createParticle(random(50, 250), random(50, 250), 1, new Circle(10, (random(0, 1) < 0.5)));  
  }  

  //add all particles to physics system as entities
  physicsSystem.addEntities(particleSystem.particles);

  applyForceToAllEntities();
}
  
function draw() {
    //noLoop();
    background(51);
    physicsSystem.update();
    particleSystem.draw();
}

setInterval(applyForceToAllEntities, 2000);

function applyForceToAllEntities() {
  //apply a initial force to each particle
  let force;
  physicsSystem.entityList.forEach(entities => {
    entities.velocity.mult(0);
    entities.position.set(random(50, 250), random(50, 250));
    force = createVector(random(-3, 3), random(-3, 3));
    entities.applyForce(force.x, force.y);
  });
}