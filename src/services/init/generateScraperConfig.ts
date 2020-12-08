import { config, siteConfigs, SelectorConfig } from '../../data';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface ScraperConfig {
  name: string;
  parserMethodName: string;
  url: string;
  selectors: SelectorConfig;
}

const argv = yargs(hideBin(process.argv)).argv;
const siteConfigList = Object.keys(siteConfigs);

export const generateScraperConfig = (): ScraperConfig => {
  // get url input from args
  if (argv._[0] && siteConfigList.includes(argv._[0].toString())) {
    const baseUrl = siteConfigs[argv._[0]].baseUrl;
    if (argv._[1]) {
      const siteConfig = siteConfigs[argv._[0]];
      const searchQuery = siteConfig.generateUserNameSearch(argv._[1] as string);
      const selectors = siteConfigs[argv._[0]].selectors;
      return {
        name: argv._[0].toString(),
        parserMethodName: siteConfigs[argv._[0]].parserMethod,
        url: baseUrl + searchQuery,
        selectors,
      };
    }
  }

  // if no args, then construct url from config
  const selectors = siteConfigs[config.defaultSiteConfig].selectors;
  return {
    name: config.defaultSiteConfig,
    parserMethodName: siteConfigs[argv._[0]].parserMethod,
    url:
      siteConfigs[config.defaultSiteConfig].baseUrl +
      siteConfigs[config.defaultSiteConfig].generateUserNameSearch(
        config.defaultNameSearch as string,
      ),
    selectors,
  };
};
