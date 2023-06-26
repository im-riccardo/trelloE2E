A. How to run the tests suite:

    1. open the terminal
    2. go to the project root folder
    3. install dependencies by launching:
    npm install
    4. launch Cypress with the following command:
    npx cypress open
    5. once Cypress window is open, click "E2E Testing" > "Start E2E Testing in Chrome".
    6. clicking the two feature names, tests will start to run.

B. Improvements:

- Manage user credentials in a dedicated file (cypress.env.json)
- Improving feature files and step definition using parameters
- Improving feature files using Scenarios Outlines and Examples
- Manage shared step definitions in a specific js file
- In the login feature, implement Login via SSO test cases
- In the Board creation step definition, manage in a better way the CORS exception ignoring
- In the Board creation step, implement an assertion at the beginning of the scenarios that checks if any board already exists, if yes, delete them (via FE or BE). At the moment this check is at the end of the scenario. The reason why it is better at the beginning is that the scenarios could fail in the middle of their run, in this case the board deletion step would not run and we would not have a clean data situation in the test environment.
- If Trello was my company product, I'd ask Devs to add more data test id attributes in the elements selectors
- In the Board creation feature, implement other test cases (e.g. columns and cards crud operations)
- Manage the link between feature file steps and step definitions in the IDE
- Manage dependencies vulnerabilities