import { DETAILED_BTNS } from "../models/models";
import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

export const createUpdateBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.update,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DETAILED_BTNS.update),
    //'data-id': `${id}`,
  }
});