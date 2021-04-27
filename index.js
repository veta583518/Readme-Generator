const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// questions

const promptQuestions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
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
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your Email Address!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
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
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmInstall",
    message: "Do you wish to provide any installation instructions?",
    default: true,
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    when: ({ confirmInstall }) => {
      if (confirmInstall) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmUsage",
    message: "Would you like to provide examples of how to use your project?",
    default: true,
  },

  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. (Required)",
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmCredit",
    message: 'Do you wish to list any contributors in the "Credits" section?',
    default: true,
  },

  {
    type: "input",
    name: "credit",
    message: 'List the GitHub usernames of all contributors, seperating by ","',
    when: ({ confirmCredit }) => {
      if (confirmCredit) {
        return true;
      } else {
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
];

// write readme file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
      // if there is an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "Readme created!",
      });
    });
  });
};

const init = () => {
  return inquirer.prompt(promptQuestions);
};
// initialize program
init().then((answers) => writeToFile("./README-GEN.md", answers));
