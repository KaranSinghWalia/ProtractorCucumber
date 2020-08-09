import { Given, When, Then } from "cucumber";
import { browser } from "protractor";

Given('URL of the application should be open.', function () {
   browser.get("www.amazon.com")
  });

  When('The user navigates to the login page.', function () {
 
  });

  Then('The user enter\'s his\/her credentials username {float} {string} and Password - {string}', function (float, string, string2) {
   
  });


  Then('The user should be logged in.', function () {

  });