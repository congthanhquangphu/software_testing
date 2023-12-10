import { ethers } from "ethers";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 1000);
});


// Given I click "My courses" in the upper left corner
Given("I click \"My courses\" in the upper left corner", () => {
  cy.visit("https://school.moodledemo.net/my/courses.php");
});

// Then I should see "My courses" page
Then('Then I should see "My courses" page', () => {
  cy.get("div").contains("My courses");
});

// When I type in Search input and Enter
Then('I type in Search input and Enter', () => {
  cy.get("div").contains("Kết nối ví");
});

// When I type in Search input and Enter
When(
  'I type in Search input and Enter',
  () => {
    cy.get("button").contains("Search").type("Mount");
    cy.type('Cypress.io{enter}')
  }
);

// Then I should see "My courses" page reload with Search result
Then('I should see "My courses" page reload with Search result', () => {
  cy.get("div").contains("Moodle and Mountaineering");
});
