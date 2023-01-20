import { CARS_SUPPLS, CARS_TYPES, numOfCars, startNum } from "../models/consts"
import { createRandomColor } from "../utilities/randomColor"
import { getRandomArbitrary } from "../utilities/utilities"
import { createCar } from "./addCar"

export const createCars = () => {
  for (let i = 0;  i < numOfCars; i += 1) {
    const color = `#${createRandomColor()}`;
    const firstName = CARS_SUPPLS[getRandomArbitrary(startNum, CARS_SUPPLS.length)];
    const secondName = CARS_TYPES[getRandomArbitrary(startNum, CARS_TYPES.length)];
    createCar({color: color, name: `${firstName} ${secondName}`});
  }
}