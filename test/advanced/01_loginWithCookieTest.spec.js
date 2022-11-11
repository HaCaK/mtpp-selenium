const { By, Builder} = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function () {
  describe("Login with cookie popup", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => await driver.quit());

    it("Fill W3Schools login form after closing cookie popup", async function () {
      this.timeout(60000);

      // await driver.manage().setTimeouts({ implicit: 500 }); 
      await driver.get(
        "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal"
      );

      await new Promise(r => setTimeout(r, 2000));
      let consentButton = await driver.findElement(
        By.xpath("/html/body/div[5]/div/div/div/div[3]/div[2]/div[2]")
      );
      await consentButton.click();

      await driver.switchTo().frame("iframeResult");

      await new Promise(r => setTimeout(r, 2000));

      let loginFormButton = await driver.findElement(
        By.xpath("/html/body/button")
      );
      await loginFormButton.click();

      await new Promise(r => setTimeout(r, 2000));

      let userInput = await driver.findElement(By.name("uname"));
      let pwInput = await driver.findElement(By.name("psw"));
      let loginButton = await driver.findElement(By.xpath("/html/body/div/form/div[2]/button"));

      const user = "testuser";
      const pw = "testpw";

      await new Promise(r => setTimeout(r, 2000));
      await userInput.sendKeys(user);
      await pwInput.sendKeys(pw);
      await loginButton.click();

      await new Promise(r => setTimeout(r, 2000));
      let result = await driver.findElement(By.xpath("/html/body/div[1]"));
      let text = await result.getText();
      
      assert.equal(text, "uname=testuser&psw=testpw&remember=on ");
    });
  });
});
