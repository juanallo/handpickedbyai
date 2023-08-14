const scraperObject = {
  url: "https://creator.nightcafe.studio/explore?q=top-hour",
  FEED_SELECTOR: "a[data-testid=\"CompactFeedJobCardLink\"]",
  async execute(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.setViewport({
      width: 1200,
      height: 800, //TODO this could be improved to pick more images.
    });

    await page.waitForSelector(this.FEED_SELECTOR);

    const images = [];
    const date = Date.now();

    let entries = await page.$$(this.FEED_SELECTOR);

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const hasContent = await page.evaluate((el) => {
        return el.innerHTML != "";
      }, entry);
      if (hasContent) {
        const data = await this.getData(
          page,
          entry,
          date.toString(),
          (date + i).toString()
        );
        if (data.image.includes("https")) {
          images.push(data);
        }
      }
    }

    return images;
  },
  async getData(page, entry, date, id) {
    let imageElm = await entry.$("img");
    const image = await page.evaluate(
      (el) => el.getAttribute("src").replace("w-1600", "w-600"),
      imageElm
    );
    const caption = await page.evaluate(
      (el) => el.getAttribute("alt").trim(),
      imageElm
    );

    return {
      id,
      date,
      image,
      caption,
    };
  },
};

export default scraperObject;
