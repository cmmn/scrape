import { parsers } from './custom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const parser = async (page: any, html: string, config: any): Promise<any> => {
  const customParser = parsers[config.name];
  const { parserMethods } = config;
  let data = [];
  for (let i = 0; i < parserMethods.length; i++) {
    const fn = customParser[parserMethods[i].methodName];
    const methodData = await fn(page, config, data);
    data = [...data, ...methodData];
  }

  return data;
};
