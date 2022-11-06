const { Builder, By } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function () {
  describe("Click element on page", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => await driver.quit());

    it("Open Visual Paradigm and click a menu item", async function () {
      this.timeout(5000);

      await driver.get("https://www.visual-paradigm.com");

      let tutorialLink = await driver.findElement(By.linkText("Tutorials"));

      await tutorialLink.click();

      let currentUrl = await driver.getCurrentUrl();

      assert.equal(currentUrl, "https://www.visual-paradigm.com/tutorials/");
    });
  });
});
