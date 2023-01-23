import { removeCarHandler } from '../controllers/removeCarHandler';
import { ICar } from '../models/models';
import { carTemplate } from './car-svg';
import { createCarBtnsRow } from './singleCarElts/createCarBtnsRow';
import { createCarNameElement } from './singleCarElts/createCarNameElt';
import { createRouteBlock } from './singleCarElts/createCarRouteBlock';
import { createEndBtn } from './singleCarElts/createEndBtn';
import { createRemoveBtn } from './singleCarElts/createRemoveBtn';
import { createSingleCar, createSingleCarContainer } from './singleCarElts/createSingleCar';
import { createStartBtn } from './singleCarElts/createStartBtn';
import { createSelectBtn } from './singleCarElts/createSelectBtn';
import { engineBtnHandler } from '../controllers/engineButtonsHandler';
import { updateCarHandler } from '../controllers/updateCarHandler';
import { stateElt } from '../store';
import { createCarBlock } from './singleCarElts/createCarRowBlock';

export const createCarRow = ({ name, color, id }: ICar) => {
  
  const getLeft = () => {
    const currentLeftPosition = stateElt.animations
      .find((item) => item.id === id);
    return currentLeftPosition
      ? currentLeftPosition.left
      : 0;
  };

  const carRow = createCarBlock(id!);
  const carBtnsRow = createCarBtnsRow();
  const nameElement = createCarNameElement(name);
  const selectBtn = createSelectBtn(id!);
  const removeBtn = createRemoveBtn(id!);
  carBtnsRow.append(selectBtn);
  carBtnsRow.append(removeBtn);
  carBtnsRow.append(nameElement);

  carRow.append(carBtnsRow);

  const routeBlock = createRouteBlock();

  const startBtn = createStartBtn(id!);
  const stopBtn = createEndBtn(id!);

  carRow.append(routeBlock);

  routeBlock.append(startBtn);
  routeBlock.append(stopBtn);
  const car = createSingleCar();

  const carBlock = createSingleCarContainer(color, id!, getLeft());

  carBlock.innerHTML = carTemplate();
  routeBlock.append(car);
  car.append(carBlock);
  
  removeBtn.addEventListener('click', removeCarHandler);
  startBtn.addEventListener('click', engineBtnHandler);
  stopBtn.addEventListener('click', engineBtnHandler);
  selectBtn.addEventListener('click', () => updateCarHandler({ name, color, id }));

  return carRow;
};
