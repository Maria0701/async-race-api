import { DETAILED_BTNS } from "../models/models";
import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

export const createGenerateBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.generate,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.generate),
  }
});