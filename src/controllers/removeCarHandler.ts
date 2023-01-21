import { AjaxActions, Paths } from "../models/models";
import { ajaxRequest } from "../requests/ajaxRequest";

export const removeCarHandler = (evt: Event) => {
    const evtTarget = evt.target as HTMLButtonElement;
    const id  = Number(evtTarget.dataset.id);

    return ajaxRequest(AjaxActions.delete, `${Paths.garage}/${id}`);
};
