import { save } from "./persistence/store.mjs";
import { dailyPick } from "./pick/index.mjs";
import { scrape } from "./scrapper/index.mjs";
import fs from "fs";

const execute = async () => {
  //scrape the sites for images
  const newImageList = await scrape();
  save(newImageList, 'raw.json', 'out')
  
  //get the full image list (including previous scrapes)
  const fullImageList = JSON.parse(fs.readFileSync('out/raw.json').toString());
  //pick a new image and save it to the website list
  const pickedImage = await dailyPick(fullImageList)
  save([pickedImage], 'images.json', '../')
};

execute()