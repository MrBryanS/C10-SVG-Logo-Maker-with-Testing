// <!-- ask for shape, fillShape, text, textColor --
class Shape {
     constructor(){
        this.color = "";
        
     }
    setColor(colorFill) {
        this.color = colorFill;

    }

    }
class Triangle extends Shape {
    render() {
        
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    
    }

}

class Circle extends Shape {

    render() {
        
        return `<circle cx="35" cy="35" r="30" fill="${this.color}" />`
    
    }


}

class Square extends Shape {

    render() {
        
        return  `<rect x="100" y="100" width="100" height="100" fill="${this.color}" />`
    
    }

}

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');