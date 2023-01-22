import { DETAILED_BTNS } from "../models/models";
import { stateElt } from "../store";
import { cars } from "./renderCars";

export const paginationHandler = (evt: Event, page: number, callback: Function) => {
  const btn = evt.target as HTMLButtonElement;
  if (btn.disabled === true) return;

  if (btn.dataset.name = DETAILED_BTNS.next) {
    page += 1;
  } else {
    page -= 1;
  }
  stateElt.activePageNumber = page;
  callback(page);
};
