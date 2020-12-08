import { parsers } from './custom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const parser = async (page: any, html: string, config: any): Promise<any> => {
  const customParser = parsers[config.name];
  const method = customParser[config.parserMethodName];
  const data = await method(page, config);
  return data;
};
