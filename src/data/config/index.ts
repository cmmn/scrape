export type WaitUntil = 'networkidle0' | 'load' | 'domcontentloaded' | 'networkidle2';

export interface SiteConfig {
  baseUrl: string;
  generateUserNameSearch: (name: string | undefined) => string;
  userListSelector: string;
}
export interface Config {
  [key: string]: SiteConfig | WaitUntil | string;
}

export const config: Config = {
  waitUntil: 'networkidle0',
  selector: 'body',
  github: {
    baseUrl: 'https://github.com/',
    generateUserNameSearch: (name: string): string =>
      `search?q=${name || 'john'}&type=Users&utf8=%E2%9C%93`,
    userListSelector: '.user-list',
  },
};
