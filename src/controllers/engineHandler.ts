import { AjaxActions, IEngine, Paths, StringObj } from "../models/models";
import { ajaxRequest } from "../requests/ajaxRequest";
import { generateQueryString } from "../utilities/utilities";
import { moveCar } from "./moveCar";

export const engineHandler = async (queryObj: StringObj ) => {
  const queryString = generateQueryString(queryObj);

  return await ajaxRequest(AjaxActions.patch, `${Paths.engine}${queryString}`)
    .then((res: IEngine) => {
        moveCar(Number(queryObj.id), res)
    });
};
