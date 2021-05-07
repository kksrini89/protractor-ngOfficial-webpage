import { browser, Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export const config: Config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // specs: ['specs/**/*.js'],
  specs: ['../features/**/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  cucumberOpts: {
    format: 'json:./report.json',
    require: ['./stepDefinitions/*.js']
  },
  //Hooks - Globally executed before running any tests
  onPrepare: () => {
    browser.manage().window().maximize();
  },
  onComplete: () => {
    const options: reporter.Options = {
      theme: 'bootstrap',
      jsonFile: './dist/report.json',
      output: './dist/report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        Browser: 'Chrome  54.0.2840.98',
        Platform: 'Windows 10',
        Parallel: 'Scenarios',
        Executed: 'Remote'
      }
    };
    reporter.generate(options);
  }
};
