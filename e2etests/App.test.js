/* global describe, it, browser */
import expect from "chai";

describe("Wanderer App", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql("Wanderer");
  });
});
