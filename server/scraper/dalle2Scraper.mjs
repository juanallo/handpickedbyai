const scraperObject = {
  url: "https://dalle2.gallery/#search-random",
  async execute(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);

    await page.waitForSelector(".art-entry");

    const images = [];
    const date = Date.now();

    let entries = await page.$$(".art-entry");

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      images.push(await this.getData(page, entry, date.toString(), (date + i).toString()));
    }

    return images
  },
  async getData(page, entry, date, id) {
    let imageElm = await entry.$("img");
    const image = await page.evaluate(
      (el) => el.getAttribute("src").replace("thumbnail", "generated"),
      imageElm
    );
    let captionElm = await entry.$(".art-description");
    const caption = await page.evaluate((el) => el.textContent.replace(/\n/g, '').trim(), captionElm);
    return {
      id,
      date,
      image,
      caption,
    };
  },
};

export default scraperObject;
