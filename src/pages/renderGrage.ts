import { createCars } from "../controllers/createCarsHandler";
import { createChooserRow } from "../elements/garageRows/chooserRow";
import { createRaceBtn, createResetBtn } from "../elements/garageRows/createBtn";
import { createGenerateBtn } from "../elements/createGenerateBtn";
import { createMainContainer } from "../elements/createMainContainer";
import { createFirstRow } from "../elements/garageRows/firstRow";
import { createSecondRow } from "../elements/garageRows/secondRow";
import { cars } from "../controllers/renderCars";
import { raceHandler } from "../controllers/raceHandler";
import { resetBtnHandler } from "../controllers/resetBtnHandler";

export const renderGaragePage = (pageNumber:number) => {
  const container = document.querySelector('.main') as HTMLDivElement;
  container.innerHTML = '';

  const chooserRow1 = createFirstRow();
  container.append(chooserRow1);

  const chooserRow2 = createSecondRow();
  container.append(chooserRow2);

  const chooserRow3 = createChooserRow()
  container.append(chooserRow3);

  const raceBtn = createRaceBtn();
  const resetBtn = createResetBtn();
  chooserRow3.append(raceBtn);
  chooserRow3.append(resetBtn);

  const generateBtn = createGenerateBtn()
  chooserRow3.append(generateBtn);

  generateBtn.addEventListener('click', () => createCars(pageNumber));
  raceBtn.addEventListener('click', raceHandler);
  resetBtn.addEventListener('click', resetBtnHandler);

  const mainContainer = createMainContainer();
  container.append(mainContainer);
  cars(pageNumber);
};
