import dalle2Scraper from "./dalle2Scraper.mjs";
import nightcafeScraper from './nightcafeScraper.mjs'
import midjourneyScraper from './midjourney.mjs'
import { startBrowser } from "../puppeteer/browser.mjs";

const scrapers = [dalle2Scraper, nightcafeScraper, midjourneyScraper];

async function scrapeAll(browserInstance) {
  const imageList = []
  let browser;
  try {
    browser = await browserInstance;
    for (const scraper of scrapers) {
      const images = await scraper.execute(browser);
      imageList.push(...images)
    }
    browser.close();
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
  return imageList
}

//Start the browser and create a browser instance
export const scrape = async () => {
  try {
    let browserInstance = await startBrowser();
    return await scrapeAll(browserInstance);
  } catch (e) {
    console.log(e);
  }
};
