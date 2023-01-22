import { WINNERS_HEAD } from "../../models/consts";
import { createNewElement } from "../createElt";

export const createWinnerTable = () => {
  const tbody = createNewElement({
    tag: 'tbody',
  });

  const tr = createNewElement({
    tag: 'tr',
  });

  WINNERS_HEAD.map((item) => tr.append(createNewElement({tag: 'th', text: item})));

  tbody.append(tr);
  return tbody;
}