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
${generateBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
### GitHub
${data.github}
### Email
${data.email}
`;
}

module.exports = generateMarkdown;
