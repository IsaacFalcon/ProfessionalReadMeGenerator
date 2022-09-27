// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a Description of the Project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide Installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should someone contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License would you like to use?',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
]).then((answers) => fs.writeFileSync('./utils/READMESample.md', generateMarkdown(answers)))
  .then(() => console.log('File was created'))
  .catch((err) => console.log(err));

// Did Not wind up using these functions
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
