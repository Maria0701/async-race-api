import { DetailedBtns } from '../models/models';
import { clearString } from '../utilities/utilities';
import { createNewElement } from './createElt';

export const createNextPage = (disable:boolean) => createNewElement({
  tag: 'button',
  text: DetailedBtns.next,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DetailedBtns.next),
  },
  disable,
});

export const createPrevPage = (disable:boolean) => createNewElement({
  tag: 'button',
  text: DetailedBtns.prev,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DetailedBtns.prev),
  },
  disable,
});