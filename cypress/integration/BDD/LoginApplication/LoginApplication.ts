import { ethers } from "ethers";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 1000);
});

Given("I open the Application and isn't connected to Metamask", () => {
  cy.visit("https://moodle.org/demo");
});

Then('I should see the button title "Kết nối ví"', () => {
  cy.get("div").contains("Kết nối ví");
});

When(
  'I will type the button "Kết nối ví" then connect metamask extension',
  () => {
    cy.get("button").contains("Kết nối ví").type("Kết nối ví");
  }
);

Then('I should see title of the button "Đăng nhập"', () => {
  cy.get("div").contains("Đăng nhập");
  cy.wait(5000);
});

Given("I open the Application and is connected to Metamask", () => {
  cy.visit("https://moodle.org/demo");
});

Then('I should see the button title "Đăng nhập"', () => {
  cy.get("div").contains("Đăng nhập");
});

When(
  'I will type the button "Đăng nhập" then type button "Sign" of metamask extension',
  () => {
    cy.get("button").contains("Đăng nhập").type("Đăng nhập");
  }
);

Then("I should see profile name in the upper right corner", () => {
  cy.get("div").contains("Thành");
});
