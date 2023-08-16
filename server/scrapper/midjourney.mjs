const scraperObject = {
  url: "https://www.midjourney.com/showcase/recent/",
  async execute(browser) {
    console.log(`Navigating to ${this.url}...`);
    const page = await browser.newPage();
    await page.setViewport({
      width: 1200,
      height: 800, //TODO this could be improved to pick more images.
    });
    await page.goto(this.url);
    await page.waitForTimeout(1000);

    const images = [];
    const date = Date.now();

    const entries = await page.$$("img:not([alt=\"\"])");

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      images.push(
        await this.getData(page, entry, date.toString(), (date + i).toString())
      );
    }

    await browser.close();
    return images;
  },
  async getData(page, entry, date, id) {
    const image = await page.evaluate(
      (el) => {
        return {
            image: el.getAttribute("src"),
            caption: el.getAttribute("alt")
        }
      },
      entry
    );
    return {
      id,
      date,
      ...image,
    };
  },
};

export default scraperObject;
