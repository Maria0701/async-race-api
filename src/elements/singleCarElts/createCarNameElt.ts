import { createNewElement } from '../createElt';

export const createCarNameElement = (name: string) => createNewElement({
  tag: 'h3',
  className: 'car-row__name',
  text: name,
});
