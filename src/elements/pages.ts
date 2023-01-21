import { DETAILED_BTNS } from "../models/models";
import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

export const createNextPage = (disable:boolean) => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.next,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DETAILED_BTNS.next),
  },
  disable,
});

export const createPrevPage = (disable:boolean) => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.prev,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DETAILED_BTNS.prev),
  },
  disable,
});