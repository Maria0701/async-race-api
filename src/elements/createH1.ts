import { createNewElement } from "./createElt";

export const createH1 = (num: number, text: string) => createNewElement({
  tag: 'h1',
  text: `${text} ${num}`,
  className: 'h1'
});
  