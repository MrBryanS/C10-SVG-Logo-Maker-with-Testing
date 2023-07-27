const inquirer = require("inquirer")
const fs = require("fs");
// impor the three classes from /lib/shape
const { Circle, Triangle, Square } = require("./lib/shape");

//const shapeLib = require("./lib/shape")
const Svg = require("./lib/svg")            


// const SVG = require("./lib/svg")
// console.log("Welcome to the Logo Generator!");
// console.log("Please answer the following questions to generate your logo.");
// console.log("You can choose up to 3 characters for your logo text.");
// console.log("You can choose from 3 shapes: circle, triangle, or square.");
// console.log("You can choose from 3 colors for your text: white, black, or yellow.");
// console.log("You can choose from 3 colors for your shape: green, red, or blue.");
// console.log("--------------------------------------------------------------");

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
            choices: ["circle", "triangle", "square"]
        },

        {
            type: "list",
            message: questions[3],
            name: "shapeColor",
            choices: ["green", "red", "blue"]
        },

    ])
        .then(function (data) {
            // create new instance of shape class
            //const shape = new circle();
            console.log(data);
            const {logoText, textColor, shapeChoice,shapeColor} = data;

            // define the shape string const up here
            let str;

            // define a variable to hold the final svg string with all the values filled
            let finalSvgString;

            // lets first get the string which completely defines our shape, i.e.
            // whether it's a circle, a triangle, or a square
            switch (shapeChoice) {
                case "circle":
                    const myCircle = new Circle();
                    // passin the color choice the user selected for the shape
                    myCircle.setColor(shapeColor); // I've now set the color of my shape
                    // nowI want to return the shape string and store it in a const
                    str = myCircle.render(); // this will return the circle element string
                    // now I want to create my svg object
                    const mySvg = new Svg(textColor, logoText); // at this moment, I've created my svg object with the text color and text content defined
                    // now call the render method of my svg class
                    finalSvgString = mySvg.render(str);
                    // now let's write this string to a file
                    writeToFile('logo.svg', finalSvgString);
                    break;
            
                default:
                    break;
            }

            // let svg = new Svg(shapeColor,textColor,textString,shapeString);
            // console.log(svg);

            // console.log("data.textColor", data.textColor);
           
            

            })
     
    }

init();      
