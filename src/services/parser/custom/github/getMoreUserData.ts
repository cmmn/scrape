// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getMoreUserData = async (page: any, users: any, config: any): Promise<any[]> => {
  const updatedUsers = [];
  // console.log({ users });
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    // console.log({ user });
    const { handle } = user;
    const url = config.baseUrl + handle;
    console.log({ url });
    await page
      .goto(url)
      .then(async (fulfilled) => {
        // console.log({ fulfilled });
        const numberOfRepos = await page.evaluate((sel) => {
          if (document.querySelector(sel)) {
            return document.querySelector(sel).innerText;
          }
        }, 'nav.UnderlineNav-body > a:nth-child(2) > span');
        console.log({ numberOfRepos });
      })
      .catch((rejected) => console.log(rejected));
    // // 'span.Counter'[0].innerText
  }

  return updatedUsers;
};
