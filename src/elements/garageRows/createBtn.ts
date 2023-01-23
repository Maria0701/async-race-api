import { DetailedBtns } from '../../models/models';
import { clearString } from '../../utilities/utilities';
import { createNewElement } from '../createElt';

export const toGarageBtn = (currPage: string) => {
  const isDisabled = clearString(DetailedBtns.toGarage) === currPage;
  return createNewElement({
    tag: 'button',
    text: DetailedBtns.toGarage,
    attrs: {
      class: 'btn btn--yellow',
      'data-id': clearString(DetailedBtns.toGarage),
    },
    disable: isDisabled,
  });
};

export const toWinnerBtn = (currPage: string) => {
  const isDisabled = clearString(DetailedBtns.toWinners) === currPage;
  return createNewElement({
    tag: 'button',
    text: DetailedBtns.toWinners,
    attrs: {
      class: 'btn btn--yellow',
      'data-id': clearString(DetailedBtns.toWinners),
    },
    disable: isDisabled,
  });
};

export const createRaceBtn = () => createNewElement({
  tag: 'button',
  text: DetailedBtns.race,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DetailedBtns.race),
  },
});

export const createResetBtn = () => createNewElement({
  tag: 'button',
  text: DetailedBtns.reset,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DetailedBtns.reset),
  },
});
