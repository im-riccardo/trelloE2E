import {
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('I click the header Create button', () => {
  cy.xpath('//button[@data-testid="header-create-menu-button"]').click();
});

When('I click the Create button menu item', () => {
  cy.xpath('//button[@data-testid="header-create-board-button"]').click();
});

When('I choose the background image', () => {
  cy.xpath('//button[contains(@style, "photo-1687270282079-58b4689fed0f")]').click();
});

When('I fill in the Board title', () => {
  cy.xpath('//input[@data-testid="create-board-title-input"]').type('My Board');
});

When('I click the menu Create button', () => {
  cy.xpath('//button[@data-testid="create-board-submit-button"]').click();
});

When('I reach the board management page', () => {
  //check via FE
  cy.xpath('//h1[@data-testid="board-name-display"]').should('exist');
  //example of check via BE
  cy.url().then(url => {
    const boardid = url.split("/")[4];
    cy.request('GET', 'https://trello.com/1/board/' + boardid)
    .then(response => {
      expect(response.status).to.equal(200);
    });
  });
});

When('I click the page Create button', () => {
  cy.xpath('//li[@data-testid="create-board-tile"]').click();
});

Then('I delete the board', () => {
  cy.xpath('//button[@aria-label="Show menu"]').click();
  cy.xpath('//li[contains(a/text(), "More")]').click();
  cy.xpath('//li[contains(a/text(), "Close board")]').click();
  cy.xpath('//input[@value="Close"]').click();
  cy.xpath('//button[@data-testid="close-board-delete-board-button"]').click();
  cy.xpath('//button[@data-testid="close-board-delete-board-confirm-button"]').click();
  cy.xpath('//span[contains(text(), "Board deleted")]').should('exist');
});
