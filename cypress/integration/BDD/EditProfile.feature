Feature: Edit Profile in the Application

    As a end-user
    I want to find courses in the Application

    Scenario: Find Course in the Application
    Given I open the Application and is Signed-in
    Then I should see profile name in the upper moodle corner
    When I click Profile Picture in the upper left corner and choose "Profile"
    Then I should see "Profile" page
    When I click in "Edit profile"
    Then I should see "Edit profile" page
    When I type in First Name input and click "Update profile"
    Then I should see "Changes saved" at "Profile" page reload with Search result

    Scenario: Find Course in the Application
    Given I open the Application and is Signed-in
    Then I should see profile name in the upper moodle corner
    When I click Profile Picture in the upper left corner and choose "Profile"
    Then I should see "Profile" page
    When I click in "Edit profile"
    Then I should see "Edit profile" page
    When I type in First Name input and click "Cancel"
    Then I should see "Profile" page reload with Search result