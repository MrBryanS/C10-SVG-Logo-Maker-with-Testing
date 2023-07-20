const inquirer = require("inquirer")
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shape")
const SVG = require("./lib/svg")

// Create an array of questions for user input
const questions = ["Enter up to 3 characters: ",
    "Choose a text color:  ",
    "Choose a shape:",
    "Choose a color for the shape: "]

// Function to write out the SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
         return console.log(err);
        }
        // console.log("Generated logo.svg");
    })
}

// Init prompts user for inputs using the inquirer package and the questions array
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "logoText"
        },

        {
            type: "list",
            message: questions[1],
            name: "textColor",
            choices: ["white", "black", "yellow"]
        },

        {
            type: "list",
            message: questions[2],
            name: "shapeChoice",
            choices: ["circle", "triangle", "square"]
        },

        {
            type: "list",
            message: questions[3],
            name: "shapeColor",
            choices: ["green", "red", "blue"]
        },

    ]).then(function (data) {
        // console.log(data);
        // console.log(data.logoText);
        // console.log(data.textColor);
        // console.log(data.shapeChoice);
        // console.log(data.shapeColor);
        var logoSvg = "";

        if (data.shapeChoice === "circle") {
            const circle = new Circle;
            circle.setColor(data.shapeColor)
            const svg = new SVG;
            console.log(svg)
            const logoSvg = svg.setShape(circle.render())
//             logoSvg = 
// `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="55" cy="55" r="50" fill="${data.shapeColor}" />
//     <text class="logoFont" x="23" y="65" fill="${data.textColor}">${data.logoText}</text>
// </svg>`


        }
        else if (data.shapeChoice === "triangle") {
            // console.log("triangle");
            logoSvg =
                `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100, 16 200, 152 16, 152" fill="${data.shapeColor}"/>
                <text x="89" y="110" fill="${data.textColor}">${data.logoText}</text>
                </svg>`
        }
        else if (data.shapeChoice === "square") {
            logoSvg = logoSvg = 
`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .logoFont {
        font-family: mono;
        font-size: 32px
    }    
    </style>
    <rect x="5" y="5" width="100" height="100" fill="${data.shapeColor}"/>
    <text class="logoFont" x="22" y="65" fill="${data.textColor}">${data.logoText}</text>
</svg>`}
        // console.log(logoSvg);
        writeToFile("logo.svg", (logoSvg));
    })
}




// <circle cx="25" cy="75" r="20" fill="blue" />

//   <polygon points="150, 18 244, 182 56, 182" fill="blue" />

//   <polygon points="250,60 100,400 400,400" class="triangle" />

// </svg>



// Function call to initialize app
init();

