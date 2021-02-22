const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-site.js");
const generatePage = require("/src/page-template");

// prompts for questions section

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Username? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Email Address!");
          return false;
        }
      },
    },
  ]);
};
const promptProject = (readmeData) => {
  console.log(`
  ===================
  Add Project Details
  ===================
  `);
  // If there is no "questions" array property, create one
  if (!readmeData.projects) {
    readmeData.projects = [];
  }
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please tell us how to install your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide instructions for use!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license:",
      choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message: "Are you allowing contributions at this time?",
      default: true,
    },
    {
      type: "input",
      name: "contribute",
      message: "List the contribution guidelines to this project?",
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTest",
      message: "Have you written any test for your application?",
      default: true,
    },
    {
      type: "input",
      name: "test",
      message:
        "List test you have written for your application. Also provide examples on how to run them.",
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};
