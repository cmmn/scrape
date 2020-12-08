import path from 'path';
import { existsSync, mkdirSync } from 'fs';
import { generateScraperConfig, ScraperConfig } from './generateScraperConfig';

export interface Directories {
  data: string;
  pages: string;
  users: string;
}

export const init = async (): Promise<ScraperConfig> => {
  const data = path.join(__dirname, '../../data');
  const pages = path.join(__dirname, '../../data/pages');
  const users = path.join(__dirname, '../../data/users');

  // make sure folders exist
  if (!existsSync(data)) mkdirSync(data);
  if (!existsSync(pages)) mkdirSync(pages);
  if (!existsSync(users)) mkdirSync(users);

  return generateScraperConfig();
};
