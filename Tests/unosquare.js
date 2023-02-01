//  module.exports = {
//   'Demo test unosquare' : function(browser) {
//     browser
//     .windowMaximize()
//     .url('https://www.unosquare.com')
//     .waitForElementVisible('body')
    
    
//     .assert.elementPresent('#menu-item-3041 > a', 'The element with id "#menu-item-3041 > a" is present')
//     .assert.attributeEquals('#menu-item-3041 > a', 'href', 'https://www.unosquare.com/services/', 'The element has attribute "href" with value "https://www.unosquare.com/services/"')
//     .assert.not.cssProperty('#menu-item-3041 > a', 'font-size', '100')
//     .assert.containsText('#menu-item-3041 > a', 'Services', 'The element has the text "services"')
//     .assert.cssProperty("#menu-1-74b6c55 > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-3454 > a", 'display', 'flex')
//     .assert.not.cssProperty("#menu-1-74b6c55 > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-3454 > a", 'font-size', '12px');
    
  
//     browser.end();
//   }
//  }