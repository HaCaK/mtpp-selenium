const { By, Builder } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function () {
  describe("Fill simple form", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => await driver.quit());

    it("Fill form in Selenium playground", async function () {
      this.timeout(5000);

      await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

      let title = await driver.getTitle();
      assert.equal(title, "Web form");

      let textBox = await driver.findElement(By.name("my-text"));
      let submitButton = await driver.findElement(By.css("button"));

      await textBox.sendKeys("Selenium");
      await submitButton.click();

      let message = await driver.findElement(By.id("message"));
      let value = await message.getText();
      assert.equal(value, "Received!");
    });
  });
});
