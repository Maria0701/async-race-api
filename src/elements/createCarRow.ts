import { ICar } from "../models/models";
import { clearString } from "../utilities/utilities";
import { carTemplate } from "./car-svg";
import { createRemoveBtn, createSelectBtn, DETAILED_BTNS } from "./createBtn";
import { createNewElement } from "./createElt";

export const createCarRow = ({name, color, id}: ICar) => {
  const carRow = createNewElement({
    tag: 'div',
    className: 'car-row',
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

  const startBtn = createNewElement({
    tag: 'button',
    className: 'start',
    attrs: {
      'data-name': clearString(DETAILED_BTNS.start),
    },
    text: DETAILED_BTNS.start,
  });

  const endBtn = createNewElement({
    tag: 'button',
    className: 'start',
    attrs: {
      'data-name': `${clearString(DETAILED_BTNS.stop)}${id}`,
    },
    text: DETAILED_BTNS.stop,
  });

  carRow.append(routeBlock);

  routeBlock.append(startBtn);
  routeBlock.append(endBtn);

  const car = createNewElement({
    tag: 'div',
     attrs: {
      'style': color,
      'data-name': clearString(DETAILED_BTNS.stop),
    },
  });
  
  car.innerHTML = carTemplate();
  routeBlock.append(car);
  return carRow;
};
