// generateTableOfContents = (answers) => {
//   // create conditionals to avoid undefines in sections
//   let link = "";
//   let installtionLink = `- [Installation](#installatoion)`;
//   let usageLink = `- [Usage](#usage)`;
//   let licenseLink = `- [License](#license)`;
//   let contributingLink = `- [Contributing](#contributing)`;
//   let testingLink = `- [Testing](#testing)`;
//   let aboutLink = `- [Questions](#questions)`;

//   if (answers.installation) {
//     link = link + installtionLink;
//   }
//   if (answers.usage) {
//     link = link + usageLink;
//   }
//   if (answers.license !== "none") {
//     link = link + licenseLink;
//   }
//   if (answers.contribute) {
//     link = link + contributingLink;
//   }
//   if (answers.test) {
//     link = link + testingLink;
//   }
//   if (answers.github) {
//     link = link + aboutLink;
//   }
//   return link;
// };

// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Test](#test)
// - [Questions](#questions)

// const generateInstallInfo = (answers) => {
//   if (!answers.installation) {
//     return "";
//   }
//   return `---
//       ## Installation

//       * ${answers.installation}

//       [Back to Contents](#table-of-contents)`;
// };
// const generateUsageInfo = (answers) => {
//   if (!answers.usage) {
//     return "";
//   } else {
//     return `---
//       ## Usage

//       * ${answers.usage}.

//       [Back to Contents](table-of-contents)`;
//   }
// };
// const generateLicenseInfo = (answers) => {
//   if (!answers.license) {
//     return "";
//   } else {
//     return `---
//       ## License

//       * This project is covered under the ${answers.license}.

//       [Back to Contents](#table-of-contents)`;
//   }
// };
// const generateContributeInfo = (answers) => {
//   if (!answers.contribute) {
//     return "";
//   } else {
//     return `---
//       ## Contribution

//       - ${answers.contribute}

//       [Back to Contents](#table-of-contents)
//     `;
//   }
// };
// const generateTestInfo = (answers) => {
//   if (!answers.test) {
//     return "";
//   } else {
//     return `---
//       ## Tests

//       - ${answers.tests}

//       [Back to Contents](#table-of-contents)`;
//   }
// };

// const generateAboutInfo = (answers) => {
//   return `## About
//     If you any questions about this project, my contact information is listed below.
//     - GitHub: [${answers.github}](https://github.com/${answers.github})
//     - Email: [${answers.email}](mailto:${answers.email})

//     [Back to Contents](#table-of-contents)`;
// };
