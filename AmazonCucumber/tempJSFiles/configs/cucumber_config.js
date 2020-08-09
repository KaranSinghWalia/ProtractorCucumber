"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * This is the configuration file which will be used for the project to run
 */
exports.config = {
    directConnect: true,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    logLevel: 'ERROR',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            excludeSwitches: ['enable-automation'],
            useAutomationExtension: false,
            // disable Password manager popup
            prefs: {
                credentials_enable_service: false
            },
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
        protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
        await protractor_1.browser.manage().window().maximize();
        await protractor_1.browser.manage().deleteAllCookies();
        await protractor_1.browser.get(protractor_1.browser.params.url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJfY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlncy9jdWN1bWJlcl9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFHN0M7O0dBRUc7QUFDUSxRQUFBLE1BQU0sR0FBVztJQUN4QixhQUFhLEVBQUUsSUFBSTtJQUNuQix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELFFBQVEsRUFBRSxPQUFPO0lBQ2pCLG1EQUFtRDtJQUVuRCxZQUFZLEVBQ1o7UUFDSSxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQUU7WUFDVixlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUN0QyxzQkFBc0IsRUFBRSxLQUFLO1lBQzlCLGlDQUFpQztZQUNqQyxLQUFLLEVBQUU7Z0JBQ0gsMEJBQTBCLEVBQUUsS0FBSzthQUNwQztTQUVKO0tBQ0o7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sRUFBRTtRQUNKLEdBQUcsRUFBRSx3QkFBd0I7S0FDaEM7SUFFRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO0tBQ2xEO0lBRUQ7O09BRUc7SUFDSCxTQUFTLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFbEIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQSwyQkFBMkI7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUdEOzs7V0FHTztJQUNQLFlBQVksRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNMLDhCQUE4QjtZQUM5QixnQ0FBZ0M7U0FDbkM7S0FDSjtJQUVEOztPQUVHO0lBQ0gsVUFBVSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBR3ZCLENBQUM7Q0FDSixDQUFDIn0=