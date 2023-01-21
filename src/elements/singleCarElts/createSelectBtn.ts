import { DETAILED_BTNS } from "../../models/models";
import { clearString } from "../../utilities/utilities";
import { createNewElement } from "../createElt";

export const createSelectBtn = (id:number) => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.select,
  attrs: {
    class: 'btn btn--yellow',
    'data-name': clearString(DETAILED_BTNS.select),
    'data-id': `${id}`,
  }
});