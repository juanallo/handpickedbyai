import { dailyPick } from "./pick/index.mjs";
import { scrape } from "./scrapper/index.mjs";
import fs from "fs";

const execute = async () => {
  await scrape();

  const images = JSON.parse(fs.readFileSync('out/raw.json').toString());

  await dailyPick(images)
};


execute()