import { DETAILED_BTNS } from "../models/models";
import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

export const toGarageBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.toGarage,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.toGarage),
  }
});

export const toWinnerBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.toWinners,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.toWinners),
  }
});

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

export const createSelectBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.select,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.select),
  }
});

