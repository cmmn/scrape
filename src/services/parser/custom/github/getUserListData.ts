import { userListLength } from '../../../shared';
import { getMoreUserData } from './getMoreUserData';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getUserListData = async (page: any, config: any): Promise<any> => {
  let users = [];
  const listLength = await userListLength(page);

  for (let i = 1; i <= listLength; i++) {
    // change the index to the next child
    const nameSelector = config.selectors.name.replace('INDEX', JSON.stringify(i));
    const descriptionSelector = config.selectors.description.replace('INDEX', JSON.stringify(i));

    const name = await page.evaluate((sel) => {
      if (document.querySelector(sel)) {
        return document.querySelector(sel).innerText;
      }
    }, nameSelector);

    const description = await page.evaluate((sel) => {
      if (document.querySelector(sel)) {
        return document.querySelector(sel).innerText;
      }
    }, descriptionSelector);

    const href: string = await page.evaluate(async (sel) => {
      return await document.querySelector(sel).toString();
    }, nameSelector);

    const urlArr = href.split('/');
    const handle = urlArr[3];

    if (name && description) {
      users = [...users, { name, handle, description }];
    }
  }

  const usersWithMoreData = await getMoreUserData(page, users, config);

  return usersWithMoreData;
};
