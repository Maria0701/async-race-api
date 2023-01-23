import { DetailedBtns } from '../../models/models';
import { clearString } from '../../utilities/utilities';
import { createNewElement } from '../createElt';

export const createRemoveBtn = (id: number) => createNewElement({
  tag: 'button',
  text: DetailedBtns.remove,
  attrs: {
    class: 'btn btn--yellow',
    'data-name': clearString(DetailedBtns.remove),
    'data-id': `${id}`,
  },
});
