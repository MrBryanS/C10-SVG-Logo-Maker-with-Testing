// create class for svg sort of like the shape.js but just one
// method setShape - run one of the methods in the shape.js - render to create the shape
class Svg {
    constructor() {
        this.shape = "";
        this.color = "";
        this.text = "";
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
        return this.shape.render(this.color, this.text);
        
    }
}

module.exports = Svg;

