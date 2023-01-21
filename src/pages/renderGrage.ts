import { createCars } from "../controllers/createCarsHandler";
import { createChooserRow } from "../elements/garageRows/chooserRow";
import { createRaceBtn, createResetBtn } from "../elements/garageRows/createBtn";
import { createGenerateBtn } from "../elements/createGenerateBtn";
import { createMainContainer } from "../elements/createMainContainer";
import { createFirstRow } from "../elements/garageRows/firstRow";
import { createSecondRow } from "../elements/garageRows/secondRow";
import { cars } from "../controllers/renderCars";

export const renderGaragePage = (pageNumber:number) => {
  const container = document.querySelector('.main') as HTMLDivElement;
  container.innerHTML = '';

  const chooserRow1 = createFirstRow();
  container.append(chooserRow1);

  const chooserRow2 = createSecondRow();
  container.append(chooserRow2);

  const chooserRow3 = createChooserRow()
  container.append(chooserRow3);

  chooserRow3.append(createRaceBtn());
  chooserRow3.append(createResetBtn());

  const generateBtn = createGenerateBtn()
  chooserRow3.append(generateBtn);

  generateBtn.addEventListener('click', () => createCars(pageNumber));

  const mainContainer = createMainContainer();
  container.append(mainContainer);
  cars(pageNumber);
};
