import { DETAILED_BTNS } from "../../models/models";
import { clearString } from "../../utilities/utilities";
import { createNewElement } from "../createElt";

export const toGarageBtn = (currPage: string) => {
  let isDisabled = clearString(DETAILED_BTNS.toGarage) === currPage;
  return createNewElement({
    tag: 'button',
    text: DETAILED_BTNS.toGarage,
    attrs: {
      class: 'btn btn--yellow',
      'data-id': clearString(DETAILED_BTNS.toGarage),
    },
    disable: isDisabled,
  });
};

export const toWinnerBtn = (currPage: string) => {
  let isDisabled = clearString(DETAILED_BTNS.toWinners) === currPage;
  return createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.toWinners,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.toWinners),
  },
  disable: isDisabled,
});
}

export const createRaceBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.race,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.race),
  }
});

export const createResetBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.reset,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.reset),
  }
});


