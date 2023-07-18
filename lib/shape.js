//crating a class Shape with a constructor and a method render
class Shape {
    constructor() {
        this.color = "";
        this.shapeColor
        
    }
    setColor(colorFill) {
       this.color = colorFill;
       this.shapeColor = data.shapeColor;
   
    }
    
}

class Triangle extends Shape {
    render() {
        
        // return `<polygon points="100, 16 200, 152 16, 152" fill=${data.shapeColor}/>`

        
    }

}

class Circle extends Shape {

    render() {

        return `<circle cx="35" cy="35" r="30" fill="${this.color}" />`

    }
}

class Square extends Shape {

    render() {

        return `<rect x="100" y="100" width="100" height="100" fill="${this.color}" />`

    }

}

module.exports = { Triangle, Circle, Square };
