Feature: Trello Board creation
  As a user
  I want to create a Trello board
  So that I can organize my tasks

    Background:
        Given I am on the home page
        When I click the login button
        And I fill in a correct mail address
        And I click the Continue button
        And I fill in a correct password
        And I click the Log in button
        Then I reach my boards page

    Scenario: Board creation via header button
        When I click the header Create button
        And I click the Create button menu item
        And I choose the background image
        And I fill in the Board title
        And I click the menu Create button
        And I reach the board management page
        Then I delete the board

    Scenario: Board creation via page button      
        When I click the page Create button
        And I choose the background image
        And I fill in the Board title
        And I click the menu Create button
        And I reach the board management page
        Then I delete the board
        