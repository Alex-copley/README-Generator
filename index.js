// TODO: Include packages needed for this application
const { prompt } = require("inquirer")
const { writeFile } = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        default: "Alex-copley"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        default: "alexmcguire2000@gmail.com"
    },
    {
        type: "input",
        name: "title",
        message: "Title this project.",
        default: "NULL"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the intended purpose of this project.",
        default: "NULL"
    },
    {
        type: "input",
        name: "install",
        message:
            "What dependencies are needed to be installed to run this application?",
        default: "NULL"
    },
    {
        type: "input",
        name: "usage",
        message:
            "Provide steps on how to use the application once the user has installed it.",
        default: "Run in terminal"
    },
    {
        type: "input",
        name: "tests",
        message: "What is the command used to run tests on this application?",
        default: "node index.js"
    },
    {
        type: "input",
        name: "contributors",
        message:
            'Provide the names of anyone who has contributed to this project, or write "Sole Author."',
        default: "Sole Author"
    },
    {
        type: "list",
        name: "license",
        message:
            "Which of the following best describes your situation? We will pick a license that is right for you.",
        choices: ["ISC", "MIT", "GNU GPLv3"],
        default: "MIT"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
