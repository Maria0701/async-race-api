import { ICar } from "../models/models";
import { carTemplate } from "./car-svg";
import { createRemoveBtn, createSelectBtn } from "./createBtn";
import { createNewElement } from "./createElt";
import { createEndBtn } from "./createEndBtn";
import { createSingleCar } from "./createSingleCar";
import { createStartBtn } from "./createStartBtn";

export const createCarRow = ({name, color, id}: ICar) => {
  const carRow = createNewElement({
    tag: 'div',
    className: 'car-row',
    attrs: {
      'data-name': `${id}`,
    },
  });

  const carBtnsRow = createNewElement({
    tag: 'div',
    className: 'car-row__btns',
  });

  const nameElement = createNewElement({
    tag: 'h3',
    className: 'car-row__name',
    text: name,
  });

  const selectBtn = createSelectBtn();
  const removeBtn = createRemoveBtn();

  carBtnsRow.append(selectBtn);
  carBtnsRow.append(removeBtn);
  carBtnsRow.append(nameElement);

  carRow.append(carBtnsRow);

  const routeBlock = createNewElement({
    tag: 'div',
    className: 'route',
  });

  const startBtn = createStartBtn(id!);
  const endBtn = createEndBtn(id!);

  carRow.append(routeBlock);

  routeBlock.append(startBtn);
  routeBlock.append(endBtn);

  const car = createSingleCar(color);

  car.innerHTML = carTemplate();
  routeBlock.append(car);
  return carRow;
};
