import { baseUrl } from "../models/consts";

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





