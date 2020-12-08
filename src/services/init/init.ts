import path from 'path';
import { existsSync, mkdirSync } from 'fs';
import { config } from '../../data';
// import { queue } from './queue';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface Directories {
  data: string;
  pages: string;
  users: string;
}

const argv = yargs(hideBin(process.argv)).argv;
const configList = Object.keys(config);

export const init = async (): Promise<void> => {
  const data = path.join(__dirname, '../../data');
  const pages = path.join(__dirname, '../../data/pages');
  const users = path.join(__dirname, '../../data/users');

  // make sure folders exist
  if (!existsSync(data)) mkdirSync(data);
  if (!existsSync(pages)) mkdirSync(pages);
  if (!existsSync(users)) mkdirSync(users);

  // get url input from args or config and add to queue
  // if (argv._[0] && argv._[0].toString().includes('https')) queue.add(argv._[0]);
  // if (argv._[0] && configList.includes(argv._[0].toString())) queue.add(config[argv._[0]]);
  // const siteConfig = config.github;
  console.log(argv._[0]);
  // if (!argv._[0]) queue.add(`${siteConfig.baseUrl as string}${siteConfig.generateUserSearch()}`);
};
