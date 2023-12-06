Feature: Login to the Application

    As a end-user
    I want to connect metamask and login to the application

    Scenario: Connect metamask through to the application
    Given I open the Application and isn't connected to Metamask
    Then I should see the button title "Kết nối ví"
    When I will type the button "Kết nối ví" then connect metamask extension
    Then I should see title of the button "Đăng nhập"
    

    Scenario: Login to the application
    Given I open the Application and is connected to Metamask
    Then I should see the button title "Đăng nhập"
    When I will type the button "Đăng nhập" then type button "Sign" of metamask extension
    Then I should see profile name in the upper right corner