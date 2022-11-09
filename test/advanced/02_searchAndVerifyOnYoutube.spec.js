const { By, Builder, until} = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function () {
  describe("Login with cookie popup", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
      
    });

    after(async () => await driver.quit());

    it("Search KFRU Video and assert that first content", async function () {
      this.timeout(60000);
        

        await driver.get('https://www.youtube.com');

        let consentButton = await driver.wait(until.elementLocated(By.xpath("//div[@id='content']/div[2]/div[6]/div/ytd-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]")));
        await consentButton.click();

        await new Promise(r => setTimeout(r, 2000));

        let searchInput = await driver.wait(until.elementLocated(By.name('search_query')));
        await searchInput.sendKeys('Master Professional Software Engineering');

        let searchButton = await driver.findElement(By.id('search-icon-legacy'));
        await searchButton.click();

        let firstContent = await driver.wait(until.elementLocated(By.xpath("//*[@id='contents']/ytd-video-renderer[1]/div[1]")));
        await firstContent.click();


        let urlToVideo = await driver.getCurrentUrl();
        assert.equal(urlToVideo,"https://www.youtube.com/watch?v=vRvJwlWkD2Y")

        let viewsInfo = await driver.wait(until.elementLocated(By.xpath("//*[@id='info']/span[1]"))).getText();
        let views = viewsInfo.split(" ")[0];
        let viewsWithoutK = views.split("K")[0];

        assert(viewsWithoutK > 7000 || viewsWithoutK > 7);
    });
  });
});
