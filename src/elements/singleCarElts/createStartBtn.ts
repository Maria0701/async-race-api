import { DETAILED_BTNS } from "../../models/models";
import { clearString } from "../../utilities/utilities";
import { createNewElement } from "../createElt";

export const createStartBtn = (id:number) => createNewElement({
  tag: 'button',
  className: 'start',
  attrs: {
    'data-name': `${clearString (DETAILED_BTNS.start)}-${id}`,
    'data-id': `${id}`,
  },
  text: DETAILED_BTNS.start,
});