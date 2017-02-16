exports.config = {
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the
  // directory from which `wdio` was called. Notice that, if you are calling
  // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script) then
  // the current working directory is where your package.json resides, so `wdio`
  // will be called from there.
  //
  specs: [
    './test/specs/**/*.e2e.js'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out
  // the Sauce Labs platform configurator - a great tool to configure your
  // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    // maxInstances can get overwritten per capability. So if you have an
    // in-house Selenium grid with only 5 firefox instances available you can
    // make sure that not more than 5 instances get started at a time.
    maxInstances: 5,
    //
    browserName: 'chrome'
  }],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'error',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // If you only want to run your tests until a specific amount of tests have
  // failed use bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './test/shots/error',
  //
  // Set a base URL in order to shorten url command calls. If your url parameter
  // starts with "/", then the base url gets prepended.
  baseUrl: 'http://localhost',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 10000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They
  // enhance your test setup with almost no effort. Unlike plugins, they don't
  // add new commands. Instead, they hook themselves up into the test process.
  services: ['selenium-standalone', 'static-server'],
  // Static server service
  staticServerFolders: [
    { mount: '/html', path: './test/html' },
    { mount: '/dist', path: './dist' }
  ],
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework
  // installed before running any tests.
  framework: 'mocha',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporters: ['dot', 'spec'],

  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd'
  },
  //
  // =====
  // Hooks
  // =====
  //
  before: function before() {
    var chai = require('chai');
    global.expect = chai.expect;
    /* eslint-disable new-cap */
    chai.Should();
  }
};
