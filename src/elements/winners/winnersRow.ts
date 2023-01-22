import { ICar, IWinners } from "../../models/models";
import { carTemplate } from "../car-svg";
import { createNewElement } from "../createElt";
import { createSingleCarContainer } from "../singleCarElts/createSingleCar";

export const winnersRow = (id: number, itemWinners:IWinners, itemCars: ICar) => {
  const row  = createNewElement({tag: 'tr'});
  const number = createNewElement({tag: 'td', text: `${id}`});
  const carBlock = createSingleCarContainer(itemCars.color, itemCars.id!, 0);
  carBlock.innerHTML = carTemplate();
  const carTd =  createNewElement({tag: 'td'});
  carTd.append(carBlock);
  const name = createNewElement({tag: 'td', text: `${itemCars.name}`});;
  const wins = createNewElement({tag: 'td', text: `${itemWinners.wins}`});
  const time = createNewElement({tag: 'td', text: `${itemWinners.time}`});
  [number, carTd, name, wins, time].map((item) => row.append(item));
  return row;
};
