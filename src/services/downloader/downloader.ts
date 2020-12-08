export const downloader = async (page: any, selector: string): Promise<string> => {
  const html = await page.evaluate((sel) => {
    if (document.querySelector(sel)) {
      return document.querySelector(sel).outerHTML;
    }
  }, selector);

  return html;
};
