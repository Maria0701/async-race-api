import { StringObj } from '../models/models';
import { engineHandler } from './engineHandler';

export const engineBtnHandler = (evt: Event) => {
  const btn = evt.target as HTMLButtonElement;
  const id = btn.dataset.id;
  const action = btn.dataset.name;

  btn.disabled = true;

  const queryObj:StringObj = {
    id: id!,
    status: action!,
  };

  engineHandler(queryObj);
};
