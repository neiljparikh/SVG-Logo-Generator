class Shape {
    constructor(shapeColor) {
    this.shapeColor = shapeColor
    }
}

class Triangle {
    constructor(shapeColor) {
    this.shapeColor = shapeColor
    }
}
class Circle {
    constructor(shapeColor) {
    this.shapeColor = shapeColor
    }
    render(){
    return `<circle cx="25" cy="75" r="20" fill="${this.shapecolor}"/>`
    }
}
class Square {
    constructor(shapeColor) {
    this.shapeColor = shapeColor
    }
}