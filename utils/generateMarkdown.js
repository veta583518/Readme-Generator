// const {
//   generateInstallInfo,
//   generateUsageInfo,
//   generateCreditInfo,
//   generateLicenseInfo,
//   generateContributeInfo,
//   generateTestInfo,
//   generateAboutInfo,
// } = require("./generateConditional");

// switch to determine which badge icon and link to display at top of document based on user selection in prompt
const generateBadge = (license) => {
  let badge = "";

  switch (license) {
    case "Apache License 2.0":
      badge =
        "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-brightgreen)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      badge =
        "[![License: GPL v3.0 ](https://img.shields.io/badge/License-GPL%20v3-green)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;
    case "MIT License":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellowgreen)](https://opensource.org/licenses/MIT)";
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge =
        "[![License: BSD 2 ](https://img.shields.io/badge/License-BSD%202-yellow)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge =
        "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-orange)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Boost Software License 1.0":
      badge =
        "[![License: BSL 1.0](https://img.shields.io/badge/License-BSL%201.0-red)](https://opensource.org/licenses/BSL-1.0";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge =
        "[![License: CC0 v1.0](https://img.shields.io/badge/License-CC0%20v1.0-blue)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 2.0":
      badge =
        "[![License: EPL 2.0](https:// https://img.shields.io/badge/License-EPL%202.0-lightgrey)](https:// https://opensource.org/licenses/EPL-2.0)";
      break;
    case "GNU Affero General Public License v3.0":
      badge =
        "[![License: AGPL v3.0](https://img.shields.io/badge/License-AGPL%20v3.0-blueviolet)](https://opensource.org/licenses/AGPL-3.0)";
      break;
    case "GNU General Public License v2.0":
      badge =
        "[![License: GPL v2.0](https://img.shields.io/badge/License-GPL%20v2-pink)](https://opensource.org/licenses/GPL-2.0)";
      break;
    case "GNU Lesser General Public License v3.0":
      badge =
        "[![License: LGPL v3.0](https://img.shields.io/badge/License-LGPL%20v3.0-purple)](https://opensource.org/licenses/LGPL-2.1)";
      break;
    case "Mozilla Public License 2.0":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-hotpink)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unlicense":
      badge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-darkgreen)](https://opensource.org/licenses/unlicense)";
      break;
    // If there is no license, return an empty string
    default:
      badge = "";
      break;
  }
  return badge;
};
generateTableOfContents = (answers) => {
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
};

const generateInstallInfo = (installation) => {
  if (!confirmInstall) {
    return "";
  }
  return `---
    ## Installation 

    * ${installation}
  
    [Back to Contents](#table-of-contents)`;
};
const generateUsageInfo = (usage) => {
  if (!confirmUsage) {
    return "";
  } else {
    return `---
    ## Usage

    * ${usage}.
  
    [Back to Contents](table-of-contents)`;
  }
};
const generateCreditInfo = (credit) => {
  if (!confirmCredit) {
    return "";
  } else {
    return `--- 
    ## Credits
  
    * The following made conibution to this project. 
  
    ${credit}
      
    [Back to Contents](#table-of-contents)`;
  }
};
const generateLicenseInfo = (license) => {
  if (!license) {
    return "";
  } else {
    return `---
    ## License

    * This project is covered under the ${license}.
  
    [Back to Contents](#table-of-contents)`;
  }
};
const generateContributeInfo = (contribute) => {
  if (!confirmContribute) {
    return "";
  } else {
    return `--- 
    ## Contribution

    ${contribute}
  
    [Back to Contents](#table-of-contents)
  `;
  }
};
const generateTestInfo = (tests) => {
  if (!confirmTest) {
    return "";
  } else {
    return `---
    ## Tests
  
    ${tests}
  
    [Back to Contents](#table-of-contents)`;
  }
};

const generateAboutInfo = (github, email) => {
  return `---
  ## About

  * If you any questions about this project, my contact information is listed below. 
  GitHub:[${github}](https://github.com/${github})
  Email: [${email}](mailto:${email})
  
  [Back to Contents](#table-of-contents)`;
};

// Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `# ${answers.title} 

  ## Description

  ${answers.description}.
  
  ${generateBadge(answers.license)}

  ---

  ## Table of Contents

  * ${generateTableOfContents}
  ${generateInstallInfo}
  ${generateUsageInfo}
  ${generateCreditInfo}
  ${generateLicenseInfo}
  ${generateContributeInfo}
  ${generateTestInfo}
  ${generateAboutInfo}`;
};

module.exports = generateMarkdown;
