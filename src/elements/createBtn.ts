import { clearString } from "../utilities/utilities";
import { createNewElement } from "./createElt";

enum DETAILED_BTNS  {
  create = 'CREATE',
  update = 'UPDATE',
  race = 'RACE',
  reset ='RESET',
  generate = 'GENERATE CARS',
  select = 'SELECT',
  remove = 'REMOVE',
  toGarage = 'TO GARAGE',
  toWinners = 'TO WINNERS',
};

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

export const createBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.create,
  attrs: {
    class: 'btn btn--blue',
    'data-id': clearString(DETAILED_BTNS.create),
  }
});

export const updateBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.update,
  attrs: {
    class: 'btn btn--blue',
    'data-id': clearString(DETAILED_BTNS.update),
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

export const createGenerateBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.generate,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.generate),
  }
});

export const selectBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.select,
  attrs: {
    class: 'btn btn--yellow',
    'data-id': clearString(DETAILED_BTNS.select),
  }
});

export const removeBtn = () => createNewElement({
  tag: 'button',
  text: DETAILED_BTNS.remove,
  attrs: {
      class: 'btn btn--yellow',
      'data-id': clearString(DETAILED_BTNS.remove),
  }
});