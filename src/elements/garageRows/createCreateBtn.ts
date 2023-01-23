import { DetailedBtns } from '../../models/models';
import { clearString } from '../../utilities/utilities';
import { createNewElement } from '../createElt';

export const createBtn = () => createNewElement({
  tag: 'button',
  text: DetailedBtns.create,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DetailedBtns.create),
  },
});
