import { createNewElement } from "./createElt";

export const createCarBlock = (id:number) =>  createNewElement({
  tag: 'div',
  className: 'car-row',
  attrs: {
    'data-name': `${id}`,
  },
});