const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', name: 'title', message: 'Enter your project title:' },
  { type: 'input', name: 'description', message: 'Enter a description:' },
  { type: 'input', name: 'installation', message: 'Enter installation instructions:' },
  { type: 'input', name: 'usage', message: 'Enter usage information:' },
  { type: 'input', name: 'contributing', message: 'Enter contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Enter test instructions:' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPLv3', 'Apache', 'None'] },
  { type: 'input', name: 'username', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' },
];

inquirer.prompt(questions).then(answers => {
    const readmeContent = `
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
  
    fs.writeFile('README.md', readmeContent, err => {
      if (err) throw err;
      console.log('README.md has been generated!');
    });
  });