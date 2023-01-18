import { toGarageBtn, toWinnerBtn } from "./createBtn";
import { createNewElement } from "./createElt";

export const topRow = createNewElement({
  tag: 'div',
  className: 'top-row',
});

topRow.append(toGarageBtn());
topRow.append(toWinnerBtn());