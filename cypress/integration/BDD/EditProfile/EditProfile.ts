import { ethers } from "ethers";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 1000);
});


// Given I click Profile Picture in the upper left corner and choose "Profile
Given("I click Profile Picture in the upper left corner and choose \"Profile\"", () => {
  cy.visit("https://school.moodledemo.net/user/profile.php");
});

// Then I should see "Profile" page
Then('Then I should see "My courses" page', () => {
  cy.get("div").contains("Barbara Gardner");
});

// When I click in "Edit profile"
When('I type in Search input and Enter', () => {
  cy.get("div").contains("Edit profile");
});


// Then I should see "Edit profile" page
Then('I should see "Edit profile" page', () => {
    cy.get("div").contains("Edit profile");
});

// When I type in First Name input and click "Update profile"
When(
    'I type in First Name input and click "Update profile"',
    () => {
      cy.get("button").contains("Search").type("Barbara");
      cy.get("button").contains("Update profile");
    }
);

// Then I should see "Changes saved" at "Profile" page reload with Search result
Then('I should see "Edit profile" page', () => {
    cy.get("div").contains("Changes saved");
});