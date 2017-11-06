const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given('I\'m in {string}', (url) => {
    return client
      .url(url)
      .waitForElementVisible('body', 1000);
  });

  Given('I put {string} in {string}', (value, input_id) => {
    return client.setValue(input_id, value);
  });

  Given('I click in {string}', (value) => {
   return client.click(`input[value='${value}']`)
  });

  Then('I see {string}', (text) => {
   return client.expect.element('body').text.to.contain(text);
  });
});
