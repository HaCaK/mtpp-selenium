const { By, Builder, until } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function () {
    describe("Login with cookie popup", function () {
        let driver;

        before(async function () {
            driver = await new Builder().forBrowser("chrome").build();
        });

        after(async () => await driver.quit());

        it("CHeck the social links of the kfru homepage", async function () {
            this.timeout(20000);

            await driver.get('https://www.weiterbildung-reutlingen-university.de/');


            let denyButton = await driver.wait(until.elementLocated(By.xpath("//*[@id='ccc-close']")));

            await denyButton.click();

            let openInsta = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/nav[2]/ul/li[1]/a"));
            await openInsta.click();


            await driver.wait(
                async () => (await driver.getAllWindowHandles()).length === 2,
                10000
            );

            const originalWindow = await driver.getWindowHandle();

            const windows = await driver.getAllWindowHandles();
            windows.forEach(async handle => {
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);
                }
            });
            
            await new Promise(r => setTimeout(r, 2000));

            let currentUrl = await driver.getCurrentUrl();
            assert.equal(currentUrl, "https://www.instagram.com/kfru_reutlingen/");

        });
    });
});


