// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const input = license;
  switch(input) {
    case 'ISC':
      response = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
      return response;
    case 'MIT':
      response = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      return response;
    case 'BSD 3':
      response = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      return response;
    case 'GPL 3.0':
      response = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      return response;
    case 'Apache 2.0':
      response = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      return response;
    case 'None':
      response = "";
      return response;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const input = license;
  switch(input) {
    case 'ISC':
      response = "(https://opensource.org/licenses/ISC)";
      return response;
    case 'MIT':
      response = "(https://opensource.org/licenses/MIT)";
      return response;
    case 'BSD 3':
      response = "(https://opensource.org/licenses/BSD-3-Clause)";
      return response;
    case 'GPL 3.0':
      response = "(https://www.gnu.org/licenses/gpl-3.0)";
      return response;
    case 'Apache 2.0':
      response = "(https://opensource.org/licenses/Apache-2.0)";
      return response;
    case 'None':
      response = "";
      return response;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") {
    return "";
  } else {
    return `## License
  This project is covered under the ${license} license. Visit the following link for more information on this license: [${license}]${renderLicenseLink(license)}`;
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

# Description  
${data.description}  

# Table of contents  
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributors](#contributors)  
[Tests](#tests)  
[Questions](#questions)  

# Installation 
The following dependencies must be installed to use this application: ${data.install}  

# Usage  
How to use the application: ${data.usage}  

# Tests
Command used to run tests on this application: ${data.tests} 

# Contributors  
${data.contributors}  

${renderLicenseSection(data.license)}  
This project is licensed under the ${data.license} license.  

# Questions  
If you have any questions, please contact me at ${data.email}
Github Link: https://github.com/${data.github} `;
}

module.exports = generateMarkdown;
