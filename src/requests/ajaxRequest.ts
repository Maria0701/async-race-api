import { baseUrl } from "../models/consts";
import { ICar, IWinners, StringObj } from "../models/models";

export const ajaxRequest = async (method:string, path:string, content?: string) => {
  try {
    let response;
    if (!content) {
      response = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
      });
    } else {
      response = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body:`${content}`,
      });
    }

    if (response.ok) {
      return await response.json();
    } else {
      return await response.text();
    }

  } catch(e) {
    console.log(e);
  }
};

type IPromise = [IWinners[], ICar[]];

export const ajaxRequestAll = async (method:string, urls:string[]) => await Promise.all(
  urls.map(async url => {
  const resp = await fetch(`${baseUrl}${url}`, {
    method: method,
    headers: {
        'Content-Type': 'application/json',
    },
  });
  return resp.json() as unknown;
}));



