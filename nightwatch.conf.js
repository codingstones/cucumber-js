require('nightwatch-cucumber')({
  cucumberArgs: ['--format', 'node_modules/cucumber-pretty', 'features'],
  nightwatchOutput: false
});
module.exports = {
  "output_folder" : "reports",

  "selenium" : {
    "start_process" : true,
    "server_path" : require('selenium-server').path,
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : require('chromedriver').path,
    }
  },
  "test_settings" : {
    "default" : {
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
