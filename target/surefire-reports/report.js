$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ClubRegNew.feature");
formatter.feature({
  "id": "clubregistration",
  "description": "",
  "name": "ClubRegistration",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "SignUp",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I want to open the browser",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I visit the https://tbbqabeta.productpartners.com url",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I visit to the Signup Page",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "I click on the club signup",
  "keyword": "When ",
  "line": 7
});
formatter.match({
  "location": "ClubRegSteps.i_want_to_open_the_browser()"
});
formatter.result({
  "duration": 15212721071,
  "status": "passed"
});
formatter.match({
  "location": "ClubRegSteps.i_visit_the_https_tbbqabeta_productpartners_com_url()"
});
