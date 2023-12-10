Feature: Find Courses in the Application

    As a end-user
    I want to find courses in the Application

    Scenario: Find Course in the Application
    Given I open the Application and is Signed-in
    Then I should see profile name in the upper moodle corner
    When I click "My courses" in the upper left corner
    Then I should see "My courses" page
    When I type in Search input and Enter
    Then I should see "My courses" page reload with Search result

    Scenario: Find Course in the Application
    Given I open the Application and is Signed-in
    Then I should see profile name in the upper moodle corner
    When I click "My courses" in the upper left corner
    Then I should see "My courses" page
    When I type in Search input and Enter
    Then I should see "My courses" page reload with Search result
    When I click Drop down menu and choose
    Then I should see "My courses" page reload with Search result