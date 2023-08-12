import dalle2Scraper from "./dalle2Scraper.mjs";
import { startBrowser } from "../puppeteer/browser.mjs";
import { save } from "../persistence/store.mjs";

const scrapers = [dalle2Scraper];

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    for (const scraper of scrapers) {
      const images = await scraper.execute(browser);
      save(images, "raw.json");
    }
    browser.close();
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

//Start the browser and create a browser instance
export const scrape = async () => {
  try {
    let browserInstance = startBrowser();
    await scrapeAll(browserInstance);
  } catch (e) {
    console.log(e);
  }
};
