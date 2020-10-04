import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { loginPage } from "../helper/loginPage.helper";

let loginpageHelper = new loginPage()

Given('URL of the application should be open.', function () {

  });

  When('The user navigates to the login page.',async function () {
    await loginpageHelper.loginFunction()
  });

  Then('The user enters his credentials username - {string} and Password - {string}', function (string, string2) {
   
 });


  Then('The user should be logged in.', function () {

  });