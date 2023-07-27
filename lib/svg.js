// let textString = "ABC";
// let textColor = "white";
// let shapeColor = "green";
// let shapeString = `<circle  cx="100" cy="100" r="75" fill=${shapeColor} />`


class Svg {
  constructor(textColor, textString) {
    this.textColor = textColor;
    this.textString = textString;
  }

  render(theShape) {
    return `
    <svg width="300" height="200" >
    ${theShape}
    <text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill="${this.textColor}">${this.textString}</text>
    </svg>`;
  }
}

module.exports = Svg;

  //let data = ["abc", "white", "circle", "green"];
//console.log(data);

// let svg = new Svg(data);
// console.log(svg);



//   console.log(Svg,"green", "white", "ABC", `<circle  cx="100" cy="100" r="75" fill=${shapeColor} />`);

  // Expected output: "Property 1"
