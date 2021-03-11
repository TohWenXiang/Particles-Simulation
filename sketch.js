/// <reference path="library/references/p5.global-mode.d.ts"/>

let physicsSystem;
let particleSystemList = [];
  
function setup() {
  createCanvas(300, 300);
  frameRate(60);

  //create a physics environment
  let gravity = createVector(0, 0.098);
  physicsSystem = new PhysicsSystem(gravity);
}

function mousePressed() {
  let positionX = constrain(mouseX, 0, width);
  let positionY = constrain(mouseY, 0, height);
  //create a particle system 
  particleSystemList.push(new ParticleSystem(positionX, positionY, physicsSystem));
}

function draw() {
    background(51);
    
    physicsSystem.update();
    
    particleSystemList.forEach(particleSystem => {
      particleSystem.update();
      particleSystem.draw();
    });
    
}