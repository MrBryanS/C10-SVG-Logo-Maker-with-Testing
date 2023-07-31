//Create SVG constructor with render method
// that uses Shape, Text Color and Text Choice to render the logo.svg file:

class Svg {
  constructor(textColor, textString) {
    
    this.textColor = textColor;
    this.textString = textString;
  }

  render(theShape) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${theShape}
    <text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill="${this.textColor}">${this.textString}</text>
    </svg>`;
  }
}

module.exports = Svg;

