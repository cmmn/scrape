import { parsers } from './custom';

export const parser = async (page: any, html: string, config) => {
  const customParser = parsers[config.name];
  const method = customParser[config.parserMethodName];
  const data = await method(page, config);
  return data;
};
