const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
`# Title
${answers.title}

# Table of Contents
* [Title](#Title)
* [Description](#Discription)
* [Usage](#Usage)
* [Contributers](Contributers)
* [Tests](#Tests)
* [Username](#Username)
* [Email](#Email)
* [License](#License)

# Discription
${answers.description}
# Installation
${answers.installation}
# Usage
${answers.usage}
# Contributers
${answers.contribution}
# Tests
${answers.test}


# License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

# Username
${answers.userName}
# Email
${answers.email}`; 

inquirer
  .prompt([
    {   
        message: "What is the name of the project?",
        name: "title"
    },
    {   
        message: "Please provide a description of the project",
        name: "description"
    },
    {   
        message: "What is the name of the user?",
        name: "userName"
    },
    {  
        message: "Please provide a description of the project",
        name: "description"
    },
    {   
        message: "What is the installation process?",
        name: "installation"
    },
    {   
        message: "How will this project be used?",
        name: "usage"
    },
    {   
        message: "What licenses are required with this project?",
        name: "licenses"
    },
    {   
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {   
        message: "What is the test process for this project?",
        name: "test"
    },
    {   
        message: "What is the user github email address?",
        name: "email"
    },
   
  ])
  .then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

