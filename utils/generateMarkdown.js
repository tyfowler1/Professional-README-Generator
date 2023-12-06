// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return ``;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return `## License

This project is covered under the [${license} license](${renderLicenseLink(license)}).`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  This project is covered under the ${answers.license} license.
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  For any questions, please reach out to [${answers.username}](https://github.com/${answers.username}) or [email me](mailto:${answers.email}).
    
`;
}

module.exports = generateMarkdown;
