# Toolshop QA – Cypress Testing Project

**Collaborative Quality Assurance Project | Manual Testing | Test Automation | API Testing | Bug Reporting**

## 1. Project Overview

Toolshop QA is a collaborative Quality Assurance project focused on evaluating the functionality, reliability, and usability of the Practice Software Testing – Toolshop application.

The project combines manual testing, exploratory testing, end-to-end automation with Cypress, API testing, and structured defect reporting.

Two team members collaborate to design test scenarios, execute test cases, automate selected workflows, identify defects, and document results.

## 2. Project Objectives

- Design and execute manual test cases.
- Implement automated end-to-end tests using Cypress.
- Validate application behavior through positive, negative, and boundary testing.
- Perform API testing and validate HTTP responses.
- Identify, document, and report software defects.
- Maintain reusable test commands and test data fixtures.
- Collect execution evidence and maintain traceability.
- Apply collaborative QA practices using GitHub, Trello, and Google Sheets.

## 3. Technologies and Tools

| Technology / Tool | Purpose |
|---|---|
| JavaScript | Test scripting |
| Node.js | JavaScript runtime |
| Cypress 16.2.1 | End-to-end test automation |
| Git | Version control |
| GitHub | Source code and collaboration |
| Google Sheets | Test case management and execution results |
| Trello | Task management, bug tracking, and evidence |
| Cypress `cy.request()` | API testing |

## 4. Application Under Test

**Practice Software Testing – Toolshop**

Application URL: https://with-bugs.practicesoftwaretesting.com/

The application provides an online shopping environment used to validate customer registration, authentication, product browsing, purchasing, contact functionality, and API operations.

## 5. Team Responsibilities

The project is divided between two team members.

### Integrante A – Carlos

Responsible for:

- 3.1 – Successful Purchase.
- 3.2 – Registration Validations.
- 3.7 – API Testing.
- Reusable Cypress login command.
- User data fixture.
- Project integration and README documentation.
- Bug reporting and evidence collection.

### Integrante B – Melani

Responsible for:

- 3.3 – Contact Form.
- 3.4 – Login with Invalid Credentials.
- 3.5 – Product Search.
- 3.6 – Remove Product from Cart.
- Reusable Cypress add-to-cart command, where applicable.
- Contact form test data fixture.
- Bug reporting and evidence collection.

### Shared Responsibilities

Both team members contribute to:

- Test case matrix creation and review.
- Exploratory testing.
- Evidence collection.
- Cross-review of automated tests and documentation.
- Final project validation.

## 6. Testing Scope

The project includes seven main testing workflows.

| ID | Testing Workflow | Responsible |
|---|---|---|
| 3.1 | Successful Purchase | Integrante A |
| 3.2 | Registration Validations | Integrante A |
| 3.3 | Contact Form | Integrante B |
| 3.4 | Login with Invalid Credentials | Integrante B |
| 3.5 | Product Search | Integrante B |
| 3.6 | Remove Product from Cart | Integrante B |
| 3.7 | API Testing | Integrante A |

Testing techniques include:

- Positive Testing
- Negative Testing
- Boundary Value Analysis
- Equivalence Partitioning
- Exploratory Testing
- End-to-End Testing
- API Testing

## 7. Automated Testing

Cypress is used to automate selected application workflows.

### Implemented Test Specifications

**Integrante A – Carlos**

- `purchase.cy.js`: Automates the successful purchase workflow, including product selection, cart, login, billing information, payment, and order confirmation.
- `registration.cy.js`: Validates mandatory registration fields when submitting an empty form.
- `api.cy.js`: Tests product retrieval and user authentication using API requests.

**Integrante B – Melani**

- `contact.cy.js`: Tests validation messages when submitting an empty contact form.

The automated specifications are maintained in their respective working branches and are subject to integration and cross-review.

### Reusable Cypress Components

The project includes:

- Custom login command: `cy.login(email, password)`.
- User fixture: `users.json`.
- Cypress support configuration: `e2e.js`.
- Application configuration: `cypress.config.js`.

## 8. Manual Testing and Test Execution

Manual test cases are documented in a shared Google Sheets matrix.

The matrix includes:

- Test Case ID.
- Module and scenario.
- Preconditions.
- Test steps.
- Test data.
- Expected result.
- Actual result.
- Execution status.
- Evidence references.
- Observations.

Test execution results are classified using PASS, FAIL, and pending execution statuses.

Screen recordings and screenshots are stored in Trello to maintain traceability without duplicating evidence.

## 9. Bug Reporting and Evidence

Defects identified during manual and exploratory testing are documented in Trello.

Each bug report includes, where applicable:

- Bug ID and title.
- Affected module.
- Description.
- Preconditions.
- Steps to reproduce.
- Expected result.
- Actual result.
- Supporting evidence.

The team uses screen recordings and screenshots to demonstrate reproducible defects.

## 10. Project Structure

```text
toolshop-cypress-qa/
│
├── cypress/
│   ├── e2e/
│   │   ├── purchase.cy.js
│   │   ├── registration.cy.js
│   │   ├── api.cy.js
│   │   └── contact.cy.js
│   │
│   ├── fixtures/
│   │   └── users.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

*The structure represents the files developed across the team branches. Files will be reflected in the main branch as approved changes are integrated.*

## 11. Installation and Execution

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/carloscabani/toolshop-cypress-qa.git
```

### Navigate to the Project

```bash
cd toolshop-cypress-qa
```

### Install Dependencies

```bash
npm install
```

### Open Cypress Test Runner

```bash
npx cypress open
```

### Execute Tests in Headless Mode

```bash
npx cypress run
```

## 12. Project Resources

The following resources are used for project coordination, test documentation, and defect tracking.

- **GitHub Repository:** https://github.com/carloscabani/toolshop-cypress-qa
- **Trello Board:** https://trello.com/b/eau7MO1X/toolshop-qa-cypress-testing
- **Google Sheets – Test Case Matrix:** https://docs.google.com/spreadsheets/d/1idZ4PbD6CCvZKIxzEk8C2WMvaSrZ8sz0BeVod3RhAzo/edit

## 13. Project Information

**Project:** Toolshop QA – Cypress Testing

**Application:** Practice Software Testing – Toolshop

**Team:** Two QA contributors

**Focus:** Manual Testing | Cypress Automation | API Testing | Exploratory Testing | Bug Reporting

**Repository:** carloscabani/toolshop-cypress-qa
