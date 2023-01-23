import { DetailedBtns, ICar } from '../models/models';
import { clearString } from '../utilities/utilities';
import { createHandler } from './createCarHandler';

export const updateCarHandler = async ({ name, color, id }:ICar) => {
  const updateBtn = document.querySelector(`[data-name="${clearString(DetailedBtns.update)}"]`) as HTMLButtonElement;
  
  const row = updateBtn.closest('.string-row');
  const nameElt = row?.querySelector('[type="text"]') as HTMLInputElement;
  const colorElt = row?.querySelector('[type="color"]') as HTMLInputElement;

  updateBtn.disabled = false;
  nameElt.disabled = false;
  colorElt.disabled = false;


  nameElt.value = name;
  colorElt.value = color;

  updateBtn.addEventListener('click', (evt) => createHandler(evt, id));
};
