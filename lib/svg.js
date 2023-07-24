
const { Circle, Square, Triangle } = require("./shape");

class Svg {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`
    }

    setTextElement(text, color) {

        this.textElement = `<text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill="${color}">${text}</text> `
    }

    //render the shape element
    setShapeElement(shape, color) {
        if (shape === "circle") {
            const circle = new Circle();
            circle.setColor(color);
            this.shapeElement = circle.render();
        }
        else if (shape === "triangle") {
            const triangle = new Triangle();
            triangle.setColor(color);
            this.shapeElement = triangle.render();
        }
        else if (shape === "square") {
            const square = new Square();
            square.setColor(color);
            this.shapeElement = square.render();
        }
       
    }

}


module.exports = Svg;
