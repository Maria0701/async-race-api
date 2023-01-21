import { DETAILED_BTNS } from "../../models/models";
import { clearString } from "../../utilities/utilities";
import { createNewElement } from "../createElt";

export const createEndBtn = (id: number) => createNewElement({
  tag: 'button',
  className: 'start',
  attrs: {
    'data-name': `${clearString (DETAILED_BTNS.stop)}`,
    'data-id': `${id}`,
  },
  text: DETAILED_BTNS.stop,
});