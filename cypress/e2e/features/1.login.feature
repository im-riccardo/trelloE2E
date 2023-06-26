Feature: Login
  As a user
  I want to log in to my account
  So that I can access my workspace

    Background:
        Given I am on the home page

    Scenario: Login with correct credentials
        When I click the login button
        And I fill in a correct mail address
        And I click the Continue button
        And I fill in a correct password
        And I click the Log in button
        Then I reach my boards page

    Scenario: Login with incorrect password
        When I click the login button
        And I fill in a correct mail address
        And I click the Continue button
        And I fill in a not correct password
        And I click the Log in button
        Then I see the incorrect credentials error message

    Scenario: Login with not existing email
        When I click the login button
        And I fill in a not existing mail address
        And I click the Continue button
        And I fill in a correct password
        And I click the Continue button
        Then I see the not existing accout error message
        