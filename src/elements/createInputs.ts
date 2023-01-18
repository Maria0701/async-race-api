import { createNewElement } from "./createElt";

export const createNameInput = () => createNewElement({
  tag: 'input',
  attrs: {
    class: 'input',
    value: '',
    type: 'text'
  }
});

export const createColorInput = () => createNewElement({
  tag: 'input',
  attrs: {
    class: 'input',
    value: '',
    type: 'color'
  }
});