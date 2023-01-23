import { DetailedBtns } from '../../models/models';
import { clearString } from '../../utilities/utilities';
import { createNewElement } from '../createElt';

export const createSelectBtn = (id:number) => createNewElement({
  tag: 'button',
  text: DetailedBtns.select,
  attrs: {
    class: 'btn btn--yellow',
    'data-name': clearString(DetailedBtns.select),
    'data-id': `${id}`,
  },
});
