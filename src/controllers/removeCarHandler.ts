import { AjaxActions, Paths } from "../models/models";
import { ajaxRequest } from "../requests/ajaxRequest";
import { stateElt } from "../store";
import { cars } from "./renderCars";

export const removeCarHandler = async (evt: Event) => {
    const evtTarget = evt.target as HTMLButtonElement;
    const id  = Number(evtTarget.dataset.id);
    let pageNumber = stateElt.activePageNumber;

    await ajaxRequest(AjaxActions.delete, `${Paths.garage}/${id}`);
    await cars(pageNumber)
};
