const inquirer = require('inquirer');
const SVG = require('svg.js');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
    }
])