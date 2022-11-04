const { By, Builder} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function() {
    describe('First script', function() {
        let driver;

        before(async function() {
            driver = await new Builder().forBrowser('chrome').build();
        });

        after(async () => await driver.quit());

        it('Fill W3Schools login form', async function() {
            this.timeout(5000)

            await driver.get('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal')
            let consentButton = await driver.findElement(By.xpath("/html/body/div[5]/div/div/div/div[3]/div[2]/div[2]"))
            await consentButton.click()

            await driver.switchTo().frame("iframeResult")

            let loginFormButton = await driver.findElement(By.xpath("/html/body/button"))
            await loginFormButton.click()

            let userInput = await driver.findElement(By.name("uname"))
            let pwInput = await driver.findElement(By.name("psw"))
            let loginButton = await driver.findElement(By.xpath("/html/body/div/form/div[2]/button"))

            const user = "testuser"
            const pw = "testpw"

            await userInput.sendKeys(user)
            await pwInput.sendKeys(pw)
            await loginButton.click()

            let result = await driver.findElement(By.xpath("/html/body/div[1]"))
            let text = await result.getText()

            assert.equal(text, `uname=${user}&psw=${pw}&remember=on `)
        });

    });
});