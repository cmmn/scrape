// import fs from 'fs';

// export const writeHtmlToIndex = async (
//   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//   page: any,
//   directories: { pages: string },
// ): Promise<void> => {
//   const indexHtml = await page.evaluate(() => document.querySelector('.user-list').outerHTML);

//   await fs.writeFile(`${directories.pages}/index.html`, indexHtml, function (err) {
//     if (err) return console.log(err);
//     console.log('Html saved > data/pages/index.html');
//   });
// };
