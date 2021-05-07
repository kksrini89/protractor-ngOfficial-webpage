import { browser, by, element, ExpectedConditions } from 'protractor';

describe('Testing Angular Official Search Feature', () => {
  it('success: search with input', async () => {
    await browser.get('https://angular.io/');
    await element(by.css("input[type='search']")).sendKeys('hello');
    await browser.sleep(1000);
    const noResultsExists = await element(by.css("p[class='no-results']")).isPresent();
    expect(noResultsExists).toBe(false);
  });
  it('failure: search with input', async () => {
    await browser.get('https://angular.io/');
    await element(by.css("input[type='search']")).sendKeys('xyz');
    await browser.sleep(1000);
    const noResultsExists = await element(by.css("p[class='no-results']")).isPresent();
    expect(noResultsExists).toBe(true);
  });
});
