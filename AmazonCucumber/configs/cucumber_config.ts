import { Config, browser } from "protractor";


/**
 * This is the configuration file which will be used for the project to run
 */
export let config: Config = {
    directConnect: true,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    logLevel: 'ERROR',
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities:
    {
        browserName: 'chrome',
        chromeOptions: {
             excludeSwitches: ['enable-automation'],
             useAutomationExtension: false,
            // disable Password manager popup
            prefs: {
                credentials_enable_service: false
            },
            // args: ["--headless", "--disable-gpu", "--window-size=1920,1080", "--log-level=3"] 
        }
    },

    /**
     * Params - These are the parameters used throughout the project
     * This will contain the 
     * @param - `application URL`
     * @param - `database credentials`
     */
    params: {
        url: "https://www.amazon.in/",
    },

    /**
     * Suites - Add all the feature files here which we want to execute
     */
    suites: {
        LoginPage: ['../../src/features/login.feature']
    },

    /**
     * OnPrepare - is the pre-condition that it will be running before the tests
     */
    onPrepare: async () => {

        browser.ignoreSynchronization = true;// for non-angular websites
        await browser.manage().window().maximize();
        await browser.manage().deleteAllCookies();
        await browser.get(browser.params.url)
    },


    /**
       *  cucumber command line options
       * 
       * */
    cucumberOpts: {
        require: [
            './../src/utils/cucumber/*.js',
            './../src/step_definitions/*.js',
        ]
    },

    /**
     * OnComplete - Post condition which will be user after the test
     */
    onComplete: async () => {


    }
};
