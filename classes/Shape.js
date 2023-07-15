//shape parameters: color, text, textColor

class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${}
        
        <rect x="10" y="10" width="30" height="30" stroke="white" fill="transparent" stroke-width="5"/>
        
      </svg>`
    }
}

//shape.js will have color, text, and stroke-width