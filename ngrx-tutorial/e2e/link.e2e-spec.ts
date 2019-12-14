import {browser, element, by} from 'protractor';

describe('homepage', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('expect pressing the 2nd link moves us to the right page', async function() {
    expect(element(by.css('.links li:nth-of-type(2)')).getText()).toBe('CLI Documentation');
    await element(by.css('.links li:nth-of-type(2)')).click();
    expect(await browser.getCurrentUrl()).toBe('https://github.com/angular/angular-cli/wiki');
  });

})
