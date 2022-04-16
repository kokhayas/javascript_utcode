const puppeteer = require("puppeteer")

async function main() {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto("https://hokutonoken.biz/sauzer1/");
	// await page.waitForResponse();
	const titles = await page.evaluate(() => {
		// document.querySelector("input").value = "@gmail.com"
		return Array.from(document.querySelectorAll(" .bracketsBox strong")).map(e => e.textContent)
	});
	console.log(titles);
}

main()
