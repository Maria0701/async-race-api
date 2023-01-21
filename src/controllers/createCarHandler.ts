import { createCar } from "./addCar";

export const createHandler = (evt:Event, id?: number) => {
  const row = (evt.target  as HTMLElement).closest('.string-row');
  const nameElt = row?.querySelector('[type="text"]') as HTMLInputElement;
  const colorElt = row?.querySelector('[type="color"]') as HTMLInputElement;
  console.log(nameElt?.value, colorElt.value);
  if (nameElt.value === '') {
    alert('Type in car Name!');
    return;
  }

  else createCar({ name: nameElt.value, color: colorElt.value, id: id});
};