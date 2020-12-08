const LIST_SELECTOR_CLASS_NAME = 'user-list-item';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const userListLength = (page: any): Promise<number> => {
  return page.evaluate((sel) => {
    return document.getElementsByClassName(sel).length;
  }, LIST_SELECTOR_CLASS_NAME);
};
