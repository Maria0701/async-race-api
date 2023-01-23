import { DetailedBtns } from '../../models/models';
import { clearString } from '../../utilities/utilities';
import { createNewElement } from '../createElt';

export const createUpdateBtn = () => createNewElement({
  tag: 'button',
  text: DetailedBtns.update,
  attrs: {
    class: 'btn btn--blue',
    'data-name': clearString(DetailedBtns.update),
  },
  disable: true,
});