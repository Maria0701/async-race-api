import { CARS_SUPPLS, CARS_TYPES, numOfCars, startNum } from "../models/consts"
import { createRandomColor } from "../utilities/randomColor"
import { getRandomArbitrary } from "../utilities/utilities"
import { createCar } from "./addCar"
import { cars } from "./renderCars";

export const createCars = async (page: number) => {
  await [...Array(numOfCars)].map(async () => {
    const color = `#${createRandomColor()}`;
    const firstName = CARS_SUPPLS[getRandomArbitrary(startNum, CARS_SUPPLS.length)];
    const secondName = CARS_TYPES[getRandomArbitrary(startNum, CARS_TYPES.length)];
    await createCar({color: color, name: `${firstName} ${secondName}`});
    await cars(page);
  });
};
