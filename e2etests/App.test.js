const expect = require('chai').expect;

describe('Wanderer App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Wanderer');
  });
  // it('Should select a country when the search button is clicked', () => {
  //   browser.url('http://localhost:3000/');
  //   browser.click('.country-search-button');
  //   const actualUrl = browser.getUrl();
  //   expect(actualUrl).to.eql('http://localhost:3000/Afghanistan');
  // });
  // it('Should navigate to the country page via dropdown', () => {
  //   browser.url('http://localhost:3000/');
  // })
});
