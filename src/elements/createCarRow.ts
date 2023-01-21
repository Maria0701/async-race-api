import { removeCarHandler } from "../controllers/removeCarHandler";
import { ICar } from "../models/models";
import { carTemplate } from "./car-svg";
import { createCarBtnsRow } from "./singleCarElts/createCarBtnsRow";
import { createCarNameElement } from "./singleCarElts/createCarNameElt";
import { createRouteBlock } from "./singleCarElts/createCarRouteBlock";
import { createCarBlock } from "./createCarRowBlock";
import { createEndBtn } from "./singleCarElts/createEndBtn";
import { createRemoveBtn } from "./singleCarElts/createRemoveBtn";
import { createSingleCar } from "./singleCarElts/createSingleCar";
import { createStartBtn } from "./singleCarElts/createStartBtn";
import { createSelectBtn } from "./singleCarElts/createSelectBtn";

export const createCarRow = ({name, color, id}: ICar) => {
  
  const carRow = createCarBlock(id!);

  const carBtnsRow = createCarBtnsRow();

  const nameElement = createCarNameElement(name);
  const selectBtn = createSelectBtn(id!);
  const removeBtn = createRemoveBtn(id!);

  carBtnsRow.append(selectBtn);
  carBtnsRow.append(removeBtn);
  carBtnsRow.append(nameElement);

  carRow.append(carBtnsRow);

  removeBtn.addEventListener('click', removeCarHandler);

  const routeBlock = createRouteBlock();

  const startBtn = createStartBtn(id!);
  const endBtn = createEndBtn(id!);

  carRow.append(routeBlock);

  routeBlock.append(startBtn);
  routeBlock.append(endBtn);

  const car = createSingleCar(color, id!);

  car.innerHTML = carTemplate();
  routeBlock.append(car);
  return carRow;
};
