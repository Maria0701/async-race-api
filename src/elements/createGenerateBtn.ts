import { DetailedBtns } from '../models/models';
import { clearString } from '../utilities/utilities';
import { createNewElement } from './createElt';

export const createGenerateBtn = () => createNewElement({
  tag: 'button',
  text: DetailedBtns.generate,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DetailedBtns.generate),
  },
});
