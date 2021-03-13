class ParticleSystem {
  constructor() {
    this.emitterList = [];
  }
  
  addEmitter(emitter = new Emitter()) {
    this.emitterList.push(emitter);
  }
  
  update() {
    this.emitterList.forEach(emitter => {
      emitter.update();
    });
  }
  
  draw() {
    this.emitterList.forEach(emitter => {
      emitter.draw();
    });
  }
}