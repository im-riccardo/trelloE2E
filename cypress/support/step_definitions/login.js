import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  // when I reach the Login password page, a CORS error appears
  // returning false here prevents Cypress from failing the test
  return false
})

Given('I am on the home page', () => {
  cy.visit('/');
});

When('I click the login button', () => {
  cy.xpath('//header[@data-testid="bignav"]//a[@href="/login"]').click();
});

When('I fill in a correct mail address', () => {
  cy.xpath('//input[@inputmode="email"]').type('rosino.forcella@gmail.com');
});

When('I fill in a not existing mail address', () => {
  cy.xpath('//input[@inputmode="email"]').type('rosino.forcella2@gmail.com');
});

When('I click the Continue button', () => {
  cy.xpath('//input[@id="login"]').click();
});

When('I fill in a correct password', () => {
  cy.xpath('//input[@id="password"]', { timeout: 5000 }).should('be.visible');
  cy.xpath('//input[@id="password"]').type('Knab123$');
});

When('I click the Log in button', () => {
  cy.xpath('//button[@id="login-submit"]').click();
});

Then('I fill in a not correct password', () => {
  cy.xpath('//input[@id="password"]', { timeout: 5000 }).should('be.visible');
  cy.xpath('//input[@id="password"]').type('Knab123$aaa');
});

Then('I reach my boards page', () => {
  cy.xpath('//button[@data-testid="header-member-menu-button"]').should('exist');
});

Then('I see the incorrect credentials error message', () => {
  cy.xpath('//div[@data-testid="form-error--content"]//span[contains(text(),"Incorrect email address and / or password")]').should('exist');
});

Then('I see the not existing accout error message', () => {
  cy.xpath("//div[@id='error']//p[contains(text(), \"There isn't an account for this email\")]").should('exist');
});
