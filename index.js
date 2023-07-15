const inquirer = require("inquirer")
const fs = require("fs");


// TODO: Create an array of questions for user input
//array of questions for user input to generate README

const questions = ["Enter up to 3 characters: ",
    "Choose a text color:  ",
    "Choose a shape:",
    "Choose a color for the shape: "]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg");
    })
}

// TODO: Create a function to initialize app
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
            choices: ["red", "green", "blue"]
        },

        {
            type: "list",
            message: questions[2],
            name: "shapeChoice",
            choices: ["cirlce", "triangle", "square"]
        },

        {
            type: "list",
            message: questions[3],
            name: "shapeColor",
            choices: ["red", "green", "blue"]
        },

    ]).then(function (data) {
        console.log(data);

  //XML COPY FROM https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes#circle
  


 

const svgText = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" fill="blue" />
  
  
  <circle cx="25" cy="75" r="20" fill="blue" />
  
  <polygon points="150, 18 244, 182 56, 182" fill="blue" />

</svg>      `


        writeToFile("logo.svg", (svgText));
    })
}

// Function call to initialize app
init();

