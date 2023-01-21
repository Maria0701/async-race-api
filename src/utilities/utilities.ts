import { StringObj } from "../models/models";

export const clearString = (str:string):string => str.toLocaleLowerCase().replace(/ /g,'');

export const getRandomArbitrary = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const generateQueryString = (obj: StringObj):string => {
  return Object.keys(obj).length 
  ? `?${Object.entries(obj).map((x) => `${x[0]}=${x[1]}`).join('&')}`
  : '';
};