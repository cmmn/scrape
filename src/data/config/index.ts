export type WaitUntil = 'networkidle0' | 'load' | 'domcontentloaded' | 'networkidle2';
export interface SelectorConfig {
  [key: string]: string;
}
export interface MethodData {
  name: string;
  methodName: string;
}
export interface SiteConfig {
  parserMethods: MethodData[];
  baseUrl: string;
  generateUserNameSearch: (name: string | undefined) => string;
  selectors: SelectorConfig;
}
export interface SiteConfigs {
  [key: string]: SiteConfig;
}
export interface Config {
  [key: string]: WaitUntil | string;
}

export const config: Config = {
  waitUntil: 'networkidle0',
  selector: 'body',
  defaultSiteConfig: 'github',
  defaultNameSearch: 'john',
};

export const siteConfigs: SiteConfigs = {
  github: {
    baseUrl: 'https://github.com/',
    generateUserNameSearch: (name: string): string =>
      `search?q=${name || 'john'}&type=Users&utf8=%E2%9C%93`,
    parserMethods: [{ name: 'users', methodName: 'getUserListData' }],
    selectors: {
      main: '.user-list',
      name:
        '#user_search_results > div.user-list > div:nth-child(INDEX) > div:nth-child(2) > div > div > a',
      description: '#user_search_results > div.user-list > div:nth-child(INDEX) > div > p',
    },
  },
};
