
class Shape {
    constructor() {
        this.color = "";
        // this.shape = "";
       
    }

    //create Shape constructor 
    setColor(userColor) {
        this.color = userColor;
    }
    // setShape(userShape) {
    //      this.shape = userShape;
    //  }

  
}



//Create the Circle, Triangle and Square Objects
class Circle extends Shape {
    render() {
        return `<circle  cx="100" cy="100" r="75" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 1 200, 152 0, 150" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="0" y="0" width="200" height="175"  fill="${this.color}" />`
    }
}

//Export the Circle, Triangle and Square Objects
module.exports = { Triangle, Circle, Square };


