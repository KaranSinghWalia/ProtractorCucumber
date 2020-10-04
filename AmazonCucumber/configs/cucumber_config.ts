import { setDefaultTimeout } from "cucumber";
import { Config, browser } from "protractor";


/**
 * This is the configuration file which will be used for the project to run
 */
export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities:
    {
        browserName: 'chrome',
    },


    /**
     * Suites - Add all the feature files here which we want to execute
     */
    suites: {
        LoginPage: ['../../src/loginPage/feature/login.feature'],
    },


    /**
       *  cucumber command line options
       * 
       * */
    cucumberOpts: {
       
        require: [
            './../src/utils/*.js',
            './../src/loginPage/step_definitions/*.js',
        ]
    },
    /**
     * Parameters which can be used throughout the project
     */
    params : {
        url : "https://www.amazon.in",
    },

    /**
     * OnPrepare - is the precondition that will get excuted befor each test
     */
    onPrepare: async () => {
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
        await browser.waitForAngularEnabled(false)
        browser.get(browser.params.url)  
        
    },
    /**
     * OnComplete is a post condition that will get executed after all the tests
     */
    onComplete: async () => {

    }


};
