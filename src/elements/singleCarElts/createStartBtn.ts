import { STOP_START } from '../../models/consts';
import { DetailedBtns } from '../../models/models';
import { clearString } from '../../utilities/utilities';
import { createNewElement } from '../createElt';

export const createStartBtn = (id:number) => {

  const name: string = STOP_START[clearString(DetailedBtns.start)];

  return createNewElement({
    tag: 'button',
    className: 'start',
    attrs: {
      'data-name': `${name}`,
      'data-id': `${id}`,
    },
    text: DetailedBtns.start,
  });
};
