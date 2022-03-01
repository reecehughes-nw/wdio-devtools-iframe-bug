exports.config = {
  specs: [
    './test.js'
  ],
  automationProtocol: 'devtools',
  capabilities: [
    {
      browserName: 'chrome',
    }
  ],
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver','devtools'],
  framework: 'jasmine',
  reporters: ['spec','dot'],

  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  }
}
