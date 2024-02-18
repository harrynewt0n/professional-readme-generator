const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        message: 'What is the purpose of your project?',
        name: 'description',
      },
      {
        type: 'list',
        message: 'Please select a license for your project...',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
      },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((responses)=>{
    writeToFile('README.md', generateMarkdown({...responses }));
});
}

// function call to initialize program
init();
