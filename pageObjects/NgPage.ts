import { browser, by, element, ElementFinder } from 'protractor';

export class NgPage {
  searchInputEl: ElementFinder;
  noResultEl: ElementFinder;

  constructor() {
    this.searchInputEl = element(by.css("input[type='search']"));
    this.noResultEl = element(by.css("p[class='no-results']"));
  }

  async navigateTo(url: string) {
    await browser.get('https://angular.io/');
  }
}
