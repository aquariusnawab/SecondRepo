$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ff1.feature");
formatter.feature({
  "line": 1,
  "name": "Business Requirement",
  "description": "",
  "id": "business-requirement",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login scenario",
  "description": "\r\nGiven: Launch Chrome and hit URl",
  "id": "business-requirement;login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Home Page display",
  "keyword": "Then "
});
formatter.match({
  "location": "code1.enter_username()"
});
formatter.result({
  "duration": 250128380,
  "status": "passed"
});
formatter.match({
  "location": "code1.enter_Password()"
});
formatter.result({
  "duration": 65992,
  "status": "passed"
});
formatter.match({
  "location": "code1.click_Login()"
});
formatter.result({
  "duration": 89505,
  "status": "passed"
});
formatter.match({
  "location": "code1.home_Page_display()"
});
formatter.result({
  "duration": 82678,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Logout scenario",
  "description": "\r\nGiven: Launch Chrome and hit URl",
  "id": "business-requirement;logout-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\"Naseer\" Page display",
  "keyword": "Then "
});
formatter.match({
  "location": "code1.enter_username()"
});
formatter.result({
  "duration": 98607,
  "status": "passed"
});
formatter.match({
  "location": "code1.enter_Password()"
});
formatter.result({
  "duration": 70542,
  "status": "passed"
});
formatter.match({
  "location": "code1.click_Logout()"
});
formatter.result({
  "duration": 78507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naseer",
      "offset": 1
    }
  ],
  "location": "code1.page_display(String)"
});
formatter.result({
  "duration": 3046590,
  "status": "passed"
});
});