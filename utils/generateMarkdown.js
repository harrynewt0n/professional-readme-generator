// function to generate markdown for README
let badgeURL = ''
function generateBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}
  
  ${generateBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
### GitHub
${data.github}
https://github.com/${data.github}
### Email
For further questions, don't hesitate to send an email to: 
${data.email}
`;
}

module.exports = generateMarkdown;
