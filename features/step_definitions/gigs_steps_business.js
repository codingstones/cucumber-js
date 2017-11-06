const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given('A facebook event with url {string}', function (string, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I submit the facebook event', function (callback) {
   // Write code here that turns the phrase above into concrete actions
   callback(null, 'pending');
  });

  Then('the event has been successfully imported', function (callback) {
   // Write code here that turns the phrase above into concrete actions
   callback(null, 'pending');
  });
});
