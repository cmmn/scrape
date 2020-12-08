import { getUserListData } from './getUserListData';

export type Method = (arg0: any, arg1: any) => any;
export interface Github {
  [key: string]: Method;
}

export const github: Github = {
  getUserListData,
};
