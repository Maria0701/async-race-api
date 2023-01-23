import { createNewElement } from '../createElt';

export const createNameInput = (disable:boolean) => createNewElement({
  tag: 'input',
  attrs: {
    class: 'input',
    value: '',
    type: 'text',
  },
  disable: disable,
});

export const createColorInput = (disable:boolean) => createNewElement({
  tag: 'input',
  attrs: {
    class: 'input',
    value: '',
    type: 'color',
  },
  disable: disable,
});
