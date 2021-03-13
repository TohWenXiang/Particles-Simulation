class Point extends Shape{
  constructor(x = 0, y = 0) {
    super(x, y);
  }
  
  draw() {}
  
  getRandomPos() {
    return this.position;
  }
}