import { Given, Then, When } from '@cucumber/cucumber';
import { NgPage } from './../pageObjects/NgPage';
import * as chai from 'chai';
import { browser } from 'protractor';

const expect = chai.expect;
const ngPage = new NgPage();

Given('Navigate to {string} web page', async function (string) {
  await ngPage.navigateTo(string);
});

When('I type search input with {string}', async function (string) {
  await ngPage.searchInputEl.sendKeys(string);
});

Then('The results should be shown', async function () {
  await browser.sleep(1500);
  const noResultsExists = await ngPage.noResultEl.isPresent();
  console.log('Success case:', noResultsExists);
  expect(noResultsExists).to.equal(false);
});

Then('The results should not be shown', async function () {
  await browser.sleep(1500);
  const noResultsExists = await ngPage.noResultEl.isPresent();
  console.log('Failure case:', noResultsExists);
  expect(noResultsExists).to.equal(true);
});
