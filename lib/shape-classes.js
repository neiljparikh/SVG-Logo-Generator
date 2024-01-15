class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Triangle {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<polygon points="250,60 100,400 400,400" fill="${this.shapecolor}"/>`;
  }
}
class Circle {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.shapecolor}"/>`;
  }
}
class Square {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.shapecolor}"/>`;
  }
}
