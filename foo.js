const inquirer = require("inquirer")
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shape")
const SVG = require("./lib/svg")


console.log(Circle);
console.log(SVG);
const ShapeLine = new Circle("green");
console.log(ShapeLine.color().render());






