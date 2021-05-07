Feature: Test Angular Official Page Search Feature

Scenario: Success with search input

Given Navigate to "https://angular.io/" web page
When I type search input with "hello"
Then The results should be shown

Scenario: Failure with search input

Given Navigate to "https://angular.io/" web page
When I type search input with "xyz"
Then The results should not be shown