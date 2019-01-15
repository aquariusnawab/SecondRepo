Feature: Business Requirement

	Scenario: Login scenario
		
		Given: Launch Chrome and hit URl
		When Enter username
		And Enter Password
		Then Click Login
		Then Home Page display
		
	Scenario: Logout scenario
		
		Given: Launch Chrome and hit URl
		When Enter username
		And Enter Password
		Then Click Logout
		Then "Naseer" Page display