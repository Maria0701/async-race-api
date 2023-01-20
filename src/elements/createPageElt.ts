import { createNewElement } from "./createElt";

export const createPageElt = (pageNumber: number) => createNewElement({
  tag: 'div',
  className: 'page',
  text: `Page ${pageNumber}`,
});