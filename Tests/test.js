module.exports = {
    'Demo test unosquare' : function(browser) {
        const firstselector = 'a[href="https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html"]';
        const secondSelector = '#docsearch > button';
        
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org')
      .waitForElementVisible('body', 5000) 
      
      .assert.textContains(firstselector, 'Get started')
      .click(firstselector)
      .pause(3000)
      .assert.textContains('div.page-header > h1', 'Install Nightwatch')
      .assert.elementPresent(secondSelector)
      .click(secondSelector)
      .pause(1000)
      .assert.elementPresent('#docsearch-input')
      .setValue('#docsearch-input', 'Asserts')
      .pause(300)
      .assert.elementPresent('#docsearch-item-0')
      .click('#docsearch-item-0 > a')
      .pause(3000)
      .assert.not.textContains('html', 'API Commands')
      .click('a[href="https://nightwatchjs.org/blog/"')
      .pause(3000)
      .assert.not.textContains('footer', 'Nightwatch.js was created in Oslo, Norway by Pineview.io - an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.')
        //this assert is failed 

      
      browser.end();
    }
  }
  