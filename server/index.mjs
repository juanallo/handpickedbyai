import { replace, save } from "./persistence/store.mjs";
import { dailyPick } from "./pick/index.mjs";
import { scrape } from "./scraper/index.mjs";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RAW_FILE_NAME = "raw.json";
const SITE_IMAGES_FILE_NAME = "images.json";
const STORE_DIRECTORY = `${__dirname}/out`;
const ROOT_DIRECTORY = `./`;

const scrapeAndSave = async () => {
  const newImageList = await scrape();
  save(newImageList, RAW_FILE_NAME, STORE_DIRECTORY);
};

const pickDailyImageAndSave = async (images) => {
  //get the full image list (including previous scrapes)

  //pick a new image and save it to the website list
  const pickedImage = await dailyPick(images);
  save([pickedImage], SITE_IMAGES_FILE_NAME, ROOT_DIRECTORY);

  return pickedImage;
};

const execute = async () => {
  await scrapeAndSave();

  const fullImageList = JSON.parse(
    fs.readFileSync(`${STORE_DIRECTORY}/${RAW_FILE_NAME}`).toString()
  );
  const pickedImage = await pickDailyImageAndSave(fullImageList);

  const newFullImageList = fullImageList.filter(
    (image) => image.id !== pickedImage.id
  );
  replace(newFullImageList, RAW_FILE_NAME, STORE_DIRECTORY);

  console.log(pickedImage);
};

try {
  execute();
} catch (e) {
  console.log(e);
}
