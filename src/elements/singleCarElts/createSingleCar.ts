import { createNewElement } from "../createElt";

export const createSingleCar = () => createNewElement({
  tag: 'div',
});

export const createSingleCarContainer = (color: string, id: number) => createNewElement({
  tag: 'div',
  className: 'car-container',
  attrs: {
    'style': `color: ${color}`,
    'data-car': `${id}`,
  },
});