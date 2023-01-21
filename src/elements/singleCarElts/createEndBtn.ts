import { STOP_START } from "../../models/consts";
import { DETAILED_BTNS } from "../../models/models";
import { clearString } from "../../utilities/utilities";
import { createNewElement } from "../createElt";

export const createEndBtn = (id: number) => {

  const name: string = STOP_START[clearString(DETAILED_BTNS.stop)];

  return createNewElement({
    tag: 'button',
    className: 'start',
    attrs: {
      'data-name': `${name}`,
      'data-id': `${id}`,
    },
    text: DETAILED_BTNS.stop,
  });
}