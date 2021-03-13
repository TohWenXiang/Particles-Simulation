/// <reference path="library/references/p5.global-mode.d.ts"/>

let physicsSystem;
let particleSystem;
  
function setup() {
  createCanvas(300, 300);
  frameRate(60);

  //create a physics environment
  let gravity = createVector(0, 0.098);
  physicsSystem = new PhysicsSystem(gravity);
  
  particleSystem = new ParticleSystem();
}

function mousePressed() {
  let positionX = constrain(mouseX, 0, width);
  let positionY = constrain(mouseY, 0, height);
  //create a emitter
  let emitter = new Emitter(positionX, positionY, new Point(positionX, positionY), physicsSystem);
  particleSystem.addEmitter(emitter);
}

function draw() {
    background(51);
    
    physicsSystem.update();
    
    particleSystem.update();
    particleSystem.draw();
    
}