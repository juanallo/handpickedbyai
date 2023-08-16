import puppeteer from "puppeteer-extra";
import StealthPlugin  from "puppeteer-extra-plugin-stealth"
puppeteer.use(StealthPlugin())

export async function startBrowser(){
	let browser;
	try {
	    console.log("Opening the browser......");
	    browser = await puppeteer.launch({
	        headless: true,
	        args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });
	} catch (err) {
	    console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}