# SVG Logo Maker Implemented with Jest Testing


[Github Repository: 
C10-SVG-Logo-Maker-with-Testing
](https://github.com/MrBryanS/C10-SVG-Logo-Maker-with-Testing)

This program was created as an exercise for the purpose of learning about and gaining experince building a Node.js command line application from scratch and for working with classes and objects.  

The finished program allows the user to choose colors, text and shapes from a list of options to create a variety of simple three character logo designs. 

The logo is rendered in a Scalable Vector Graphics (SVG) file called 'logo.svg'  Each new logo will overwrite any previously existing 'logo.svg' file.  It is left to the user to either rename or copy the 'logo.svg' to another folder to save past results.

The finished program runs from a terminal prompt using [Inquirer.js version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4).

In addtion to the finished program testing is implemented with [JEST](https://jestjs.io/docs/getting-started). 

Have fun!

## Instructions to create a new logo.svg file: 

Note: running the program will overwrite the '.\logo.svg' file if one already exists.  Copy the '.\logo.svg' to another location or rename the file to save past results.

#### Run the following commands from the terminal prompt using node.js to run the index.js script.


Set-up the environment:

    $ npm init -y


Run the program:

    $ node index.js
    
    Answer questions as prompted.

    A new logo.svg file is then created. 


##Program Files:

[index.js](index.js)


[lib\shape.js](lib\shape.js)

[lib\svg.js](lib\svg.js)

[lib\shapes.test.js](lib\shapes.test.js)


## Program Demo:

Recording of the finished program is here:

    .\recordingOfProgramRunning\Run Test Suite and then Create 3 Logos.webm

## Testing

At the terminal prompt enter: "npm test"

Recording of testing:







