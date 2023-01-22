import { AjaxActions, ICar, Paths } from "../models/models";
import { ajaxRequest } from "../requests/ajaxRequest";
import { createRaceContainer } from "./createRaceContainer";

export const cars = async (pageNumber: number) => await ajaxRequest(AjaxActions.get, Paths.garage)
.then((res:ICar[]) => {
  const mainContainer = document.querySelector('.main-container') as HTMLDivElement;
  mainContainer.innerHTML = '';
  createRaceContainer (res, pageNumber, mainContainer);
});