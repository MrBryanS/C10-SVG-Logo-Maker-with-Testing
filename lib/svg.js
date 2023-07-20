// create class for svg sort of like the shape.js but just one
// method setShape - run one of the methods in the shape.js - render to create the shape
class Svg {
    constructor() {
        this.shape = "";
        this.shapeColor = "";
        this.textColor = "";
    }

    setShape(shape) {
        this.shape = shape;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<style>
.logoFont {
font-size: 62px}
    </style>
    ${this.shape}
    <text class="logoFont" x="23" y="65" fill="${this.shapeColor}">${this.textColor}</text>
</svg>`
        
    }
}

module.exports = Svg;

