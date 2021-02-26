class PhysicsSystem {
    constructor(gravity) {
        this.gravity = gravity ?? createVector();
        this.entityList = [];
    }

    addEntity(entity) {
        this.entityList.push(entity);
    }

    addEntities(entities = []) {
        entities.forEach(entity => {
            this.addEntity(entity);  
        });
    }

    update() {
        this.entityList.forEach(entity => {
            //v = u + at
            entity.velocity.add(entity.acceleration);
            entity.velocity.add(this.gravity);
            
            entity.position.add(entity.velocity);
            //reset acceleration 
            entity.acceleration.mult(0);
        });
    }
}