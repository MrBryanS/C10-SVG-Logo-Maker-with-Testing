//create Shape class 
class Shape {
    constructor() {
        this.color = "";
        }
    setColor(color) {
        this.color = color;
    }

}

class Circle extends Shape {
    render() {
        return `<circle  cx="100" cy="100" r="75" fill=${this.shapeColor} />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 1 200, 152 0, 150" fill=${this.shapeColor}/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="0" y="0" width="200" height="175"  fill=${this.shapeColor}/>`
    }
}

module.exports = { Triangle, Circle, Square };


