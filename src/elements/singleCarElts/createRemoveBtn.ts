import { DETAILED_BTNS } from "../../models/models";
import { clearString } from "../../utilities/utilities";
import { createNewElement } from "../createElt";

export const createRemoveBtn = (id: number) => createNewElement ({
  tag: 'button',
  text: DETAILED_BTNS.remove,
  attrs: {
    class: 'btn btn--yellow',
    'data-name': clearString(DETAILED_BTNS.remove),
    'data-id': `${id}`,
  }
});