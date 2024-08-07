const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3 || 'Please enter up to three characters only.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):'
  }
];

function generateSVG(answers) {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
  }
  shape.setColor(answers.shapeColor);

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
  `;
}

async function run() {
  try {
    const answers = await inquirer.prompt(questions);
    const svgContent = generateSVG(answers);
    await writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

run();