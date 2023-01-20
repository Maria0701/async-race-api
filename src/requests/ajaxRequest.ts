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
      console.log(content);
      response = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body:`${content}`,
      });
    }

    return await response.json();

  } catch(e) {
    console.log(e);
  }
};





