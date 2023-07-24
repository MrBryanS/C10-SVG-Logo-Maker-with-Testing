//variables are: textString, textColor, shapeColor

if (shapeChoice === "circle") {
    var shapeString = `<circle  cx="100" cy="100" r="75" fill=${shapeColor} />`
}
else if (shapeChoice === "square") {
    var shapeString =  `<rect x="0" y="0" width="200" height="175"  fill=${shapeColor}/>`
}
else if (shapeChoice === "triangle") {
    var shapeString = `<polygon points="100, 1 200, 152 0, 150" fill=${shapeColor}/>`
}

                     



`<svg width="300" height="200" >
    ${shapeString}
    <text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill=${textColor}>${textString}</text>
</svg>`

