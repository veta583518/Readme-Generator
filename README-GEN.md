# ksdnf;dsnf 

  ## Description

  sndf;lsnd;f.
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellowgreen)](https://opensource.org/licenses/MIT)

  ---

  ## Table of Contents

  * (answers) => {
  let link = "";
  let installtionLink = `- [Installation](#installatoion)`;
  let usageLink = `- [Usage](#usage)`;
  let creditLink = `- [Credits](#credits)`;
  let licenseLink = `- [License](#license)`;
  let contributingLink = `- [Contributing](#contributing)`;
  let testingLink = `- [Testing](#testing)`;
  let aboutLink = `- [Questions](#questions)`;

  if (answers.confirmInstall) {
    link = link + installtionLink;
  }
  if (answers.confirmUsage) {
    link = link + usageLink;
  }
  if (answers.confirmCredit) {
    link = link + creditLink;
  }
  if (answers.license !== "none") {
    link = link + licenseLink;
  }
  if (answers.confirmContribute) {
    link = link + contributingLink;
  }
  if (answers.confirmTest) {
    link = link + testingLink;
  }
  if (answers.github) {
    link = link + aboutLink;
  }
  return link;
}
  (installation) => {
  if (!confirmInstall) {
    return "";
  }
  return `---
    ## Installation 

    * ${installation}
  
    [Back to Contents](#table-of-contents)`;
}
  (usage) => {
  if (!confirmUsage) {
    return "";
  } else {
    return `---
    ## Usage

    * ${usage}.
  
    [Back to Contents](table-of-contents)`;
  }
}
  (credit) => {
  if (!confirmCredit) {
    return "";
  } else {
    return `--- 
    ## Credits
  
    * The following made conibution to this project. 
  
    ${credit}
      
    [Back to Contents](#table-of-contents)`;
  }
}
  (license) => {
  if (!license) {
    return "";
  } else {
    return `---
    ## License

    * This project is covered under the ${license}.
  
    [Back to Contents](#table-of-contents)`;
  }
}
  (contribute) => {
  if (!confirmContribute) {
    return "";
  } else {
    return `--- 
    ## Contribution

    ${contribute}
  
    [Back to Contents](#table-of-contents)
  `;
  }
}
  (tests) => {
  if (!confirmTest) {
    return "";
  } else {
    return `---
    ## Tests
  
    ${tests}
  
    [Back to Contents](#table-of-contents)`;
  }
}
  (github, email) => {
  return `---
  ## About

  * If you any questions about this project, my contact information is listed below. 
  GitHub:[${github}](https://github.com/${github})
  Email: [${email}](mailto:${email})
  
  [Back to Contents](#table-of-contents)`;
}