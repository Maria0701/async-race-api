import { createNewElement } from './createElt';

export const createH1 = (text: string) => createNewElement({
  tag: 'h1',
  text: `${text}`,
  className: 'h1',
});
