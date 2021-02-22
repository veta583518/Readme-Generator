// switch to determine which badge icon to display at top of document

const generateBadge = license => {
    let badge = '';
  
    switch (license) {
      case 'Apache License 2.0':
          badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-brightgreen)](https://opensource.org/licenses/Apache-2.0)';
          break;
      case 'GNU General Public License v3.0': 
          badge = '[![License: GPL v3.0 ](https://img.shields.io/badge/License-GPL%20v3-green)](https://www.gnu.org/licenses/gpl-3.0.en.html)';
          break;
      case 'MIT License':
          badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellowgreen)](https://opensource.org/licenses/MIT)';
          break;
      case 'BSD 2-Clause "Simplified" License':
          badge = '[![License: BSD 2 ](https://img.shields.io/badge/License-BSD%202-yellow)](https://opensource.org/licenses/BSD-2-Clause)';
          break;
      case 'BSD 3-Clause "New" or "Revised" License':
          badge = '[![License: BSD 3](https://img.shields.io/badge/License-BSD%203-orange)](https://opensource.org/licenses/BSD-3-Clause)';
          break;
      case 'Boost Software License 1.0':
          badge = '[![License: BSL 1.0](https://img.shields.io/badge/License-BSL%201.0-red)](https://opensource.org/licenses/BSL-1.0';
          break;
      case 'Creative Commons Zero v1.0 Universal':
          badge = '[![License: CC0 v1.0](https://img.shields.io/badge/License-CC0%20v1.0-blue)](http://creativecommons.org/publicdomain/zero/1.0/)';
          break;
      case 'Eclipse Public License 2.0':
          badge = '[![License: EPL 2.0](https:// https://img.shields.io/badge/License-EPL%202.0-lightgrey)](https:// https://opensource.org/licenses/EPL-2.0)';
          break;
      case 'GNU Affero General Public License v3.0':
          badge = '[![License: AGPL v3.0](https://img.shields.io/badge/License-AGPL%20v3.0-blueviolet)](https://opensource.org/licenses/AGPL-3.0)';
          break;
      case 'GNU General Public License v2.0':
          badge = '[![License: GPL v2.0](https://img.shields.io/badge/License-GPL%20v2-pink)](https://opensource.org/licenses/GPL-2.0)';
          break;
      case 'GNU Lesser General Public License v3.0':
          badge = '[![License: LGPL v3.0](https://img.shields.io/badge/License-LGPL%20v3.0-purple)](https://opensource.org/licenses/LGPL-2.1)';
          break;
      case 'Mozilla Public License 2.0':
          badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-hotpink)](https://opensource.org/licenses/MPL-2.0)';
          break;
      case 'The Unlicense':
          badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-darkgreen)](https://opensource.org/licenses/unlicense)';
          break;
      default:
          badge = '';
          break;
    }
    return badge;
  };
  
  
  
  const generateLicense = license => {
    if (license === "none") {
      return '';
    }
    return `
  ---
  ## License
  This project is covered under the ${license}.
  [Back to Contents](#table-of-contents)`
  }