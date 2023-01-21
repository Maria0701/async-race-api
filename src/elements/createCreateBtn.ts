import { DETAILED_BTNS } from "../models/models";
import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

export const createBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.create,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString (DETAILED_BTNS.create),
  }
});