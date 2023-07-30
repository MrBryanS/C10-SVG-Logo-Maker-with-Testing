const inquirer = require("inquirer")
const fs = require("fs");
//  console.log("Welcome to the Logo Generator!");
console.log("Please answer the following questions to generate your logo.");
console.log("You can choose up to 3 characters for your logo text.");
console.log("You can choose from 3 shapes: circle, triangle, or square.");
console.log("You can choose from 3 colors for your text: white, black, or yellow.");
console.log("You can choose from 3 colors for your shape: green, red, or blue.");
console.log("--------------------------------------------------------------");

// Create an array of questions for user input
const questions = ["Enter up to 3 characters: ", "Choose a text color: ", "Choose a shape: ", "Choose a color for the shape: "];
// console.log(questions);

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
            choices: ["square", "circle", "triangle"]
        },

        {
            type: "list",
            message: questions[3],
            name: "shapeColor",
            choices: ["green", "red", "blue"]
        },
        
    ])
    //Process user inputs to store code for the shape into the shapeString var
    
    .then(function (data) {
        console.log("Thank you for using the Logo Generator!");
        

        if (data.shapeChoice === "circle") {
            
            var shapeString = `<circle  cx="100" cy="100" r="75" fill="${data.shapeColor}" />`
        }
        else if (data.shapeChoice === "square") {
            console.log(data.shapeChoice)
            var shapeString =  `<rect x="0" y="0" width="200" height="175"  fill="${data.shapeColor}"/>`
        }
        else if (data.shapeChoice === "triangle") {
            var shapeString = `<polygon points="100, 1 200, 152 0, 150" fill="${data.shapeColor}"/>`
        }
        
    //Write the svgString to a file:
    const svgString = 
        `<svg width="300" height="200" >
        ${shapeString}
        <text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill="${data.textColor}">${data.logoText}</text>
        </svg>`

    writeToFile("logo.svg", (svgString));

console.log(svgString);




    });

    
    }// end of init function


init();      
