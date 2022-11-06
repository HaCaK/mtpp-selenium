const { Builder } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function () {
  describe("Verify page title", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => await driver.quit());

    it("Open Google and verify page title", async function () {
      await driver.get("https://www.google.de");

      let title = await driver.getTitle();
      assert.equal(title, "Google");
    });
  });
});
