import { by, element } from "protractor";

export class loginPageObjects{

    static usename = 
    element(by.id("ap_email"))

    static contiune = 
    element(by.id("continue"))

    static password = 
    element(by.name("password"))

    static signIn = 
    element(by.id("signInSubmit"))

    static dishwasher = 
    element.all(by.xpath("//img[@class = 'landscape-image']"))

    static firstNumber =
    element(by.model("first")) 

    static loginButton = 
    element(by.id("nav-link-accountList"))

    static emailLabel = 
    element(by.xpath("//label[@for = 'ap_email']"))

}