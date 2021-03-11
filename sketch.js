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
  particleSystem = new ParticleSystem(150, 20, physicsSystem);
}
  
function draw() {
    background(51);
    physicsSystem.update();
    particleSystem.update();
    particleSystem.draw();
}