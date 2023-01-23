import { createNewElement } from '../createElt';

export const createSingleCar = () => createNewElement({
  tag: 'div',
});

export const createSingleCarContainer = (color: string, id: number, left: number) => createNewElement({
  tag: 'div',
  className: 'car-container',
  attrs: {
    'style': `color: ${color}; translate3d(${left}, 0, 0);`,
    'data-car': `${id}`,
  },
});