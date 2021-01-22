const wiki = require("wikipedia");
const fs = require("fs");

const plotTitle = "== Plot ==";

const season1OutputFile = "output/season1.json";
const season2OutputFile = "output/season2.json";

/**
 * Copies episode information from wikipedia pages
 *
 * @param {*} season // array of season values
 * @param {*} outputFile // file where to save them
 */
const copyWikipedia = async (season, outputFile) => {
	try {
		fs.unlinkSync(outputFile);
	} catch (error) {
		console.log(error);
	}

	try {
		fs.appendFileSync(outputFile, "[");

		for (let i = 0; i < season.length; i++) {
			const page = await wiki.page(season[i]);
			// console.log(page);
			// //Response of type @Page object
			// // const summary = await page.summary();
			// // console.log(summary.extract);
			// const content = await page.content();
			// console.log(content["plot"]);
			//Response of type @wikiSummary - contains the intro and the main image

			const summary = await page.summary();
			// console.log(summary.extract);

			// first 120 characters is preview
			const summaryPreview = summary.extract.substring(0, 120);
			const summaryFull = summary.extract;

			// if you wanted to you could use this to pull out more values from wikipedia like the plot value
			// // console.log("plot");
			// const content = await page.content();
			// const sections = content.split("\n\n\n");
			// // console.log(sections);
			// const plotIndex = sections.findIndex((value) =>
			// 	value.includes(plotTitle)
			// );
			// const plot = sections[plotIndex];
			// const plotFormatted = plot.replace(plotTitle, "");
			// const plotWithCorrectSpaces = plotFormatted.replace(/\n/g, "\n\n");
			// // console.log(plotFormatted);
			// // const replaceUnderscores = new RegExp("[_]/g");

			const output = {
				key: season[i].replace(/_/g, " "),
				preview: summaryPreview,
				full: summaryFull,
				link: page.fullurl,
				showFull: false,
			};

			fs.appendFileSync(outputFile, JSON.stringify(output));

			if (i === season.length - 1) {
				continue;
			} else {
				fs.appendFileSync(outputFile, ",");
			}
		}

		fs.appendFileSync(outputFile, "]");
	} catch (error) {
		console.log(error);
	}
};

const season1 = [
	"Chapter_1:_The_Mandalorian",
	"Chapter_2:_The_Child",
	"Chapter_3:_The_Sin",
	"Chapter_4:_Sanctuary",
	"Chapter_5:_The_Gunslinger",
	"Chapter_6:_The_Prisoner",
	"Chapter_7:_The_Reckoning",
	"Chapter_8:_Redemption",
];

const season2 = [
	"Chapter_9:_The_Marshal",
	"Chapter_10:_The_Passenger",
	"Chapter_11:_The_Heiress",
	"Chapter_12:_The_Siege",
	"Chapter_13:_The_Jedi",
	"Chapter_14:_The_Tragedy",
	"Chapter_15:_The_Believer",
	"Chapter_16:_The_Rescue",
];

copyWikipedia(season1, season1OutputFile);
copyWikipedia(season2, season2OutputFile);
