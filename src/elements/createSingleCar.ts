import { DETAILED_BTNS } from "../models/models";
import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

export const createSingleCar = (color: string) => createNewElement({
  tag: 'div',
   attrs: {
    'style': `color: ${color}`,
    'data-name': clearString(DETAILED_BTNS.stop),
  },
});