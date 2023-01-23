import { DetailedBtns } from '../models/models';
import { stateElt } from '../store';
import { createCar } from './addCar';
import { cars } from './renderCars';

const clearElts = (
  nameElt: HTMLInputElement, 
  colorElt: HTMLInputElement, 
  btn: HTMLButtonElement,
) => {
  nameElt.value = '';
  colorElt.value = '';
  btn.disabled = btn.disabled === true 
    ? false
    : true;
  nameElt.disabled = nameElt.disabled === true 
    ? false
    : true;
  colorElt.disabled = colorElt.disabled === true 
    ? false
    : true;
};

export const createHandler = async (evt:Event, id?: number) => {
  const btn = evt.target as HTMLButtonElement;
  if (btn.disabled === true) return;
  
  const row = btn.closest('.string-row');
  const nameElt = row?.querySelector('[type="text"]') as HTMLInputElement;
  const colorElt = row?.querySelector('[type="color"]') as HTMLInputElement;
  const pageNumber = stateElt.activePageNumber;

  if (btn.dataset.name === DetailedBtns.create) {
    btn.disabled = true;
    nameElt.disabled = true;
    colorElt.disabled = true;
  }

  if (nameElt.value === '') {
    alert('Type in car Name!');
    return;
  }

  await createCar({ name: nameElt.value, color: colorElt.value, id: id });
  await cars(pageNumber);
  await clearElts(nameElt, colorElt, btn);
};