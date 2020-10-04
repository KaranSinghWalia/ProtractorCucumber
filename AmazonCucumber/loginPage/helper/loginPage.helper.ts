import { browser } from "protractor";
import { loginPageObjects } from "./loginPage.po";

export class loginPage {

    async loginFunction() {

        console.log("click action will be performed")
        await loginPageObjects.loginButton.click()
        console.log(await loginPageObjects.emailLabel.getText())
        console.log("sendkeys action will be performed")
        await loginPageObjects.usename.sendKeys("karanbirsingh93@outlook.com")




    }
}