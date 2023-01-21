import { createHandler } from './controllers/createCarHandler';
import { createCars } from './controllers/createCarsHandler';
import { createRaceContainer } from './controllers/createRaceContainer';
import { ChooserRow } from './elements/chooserRow';
import { createRaceBtn, createResetBtn } from './elements/createBtn';
import { createBtn } from './elements/createCreateBtn';
import { createGenerateBtn } from './elements/createGenerateBtn';
import { createColorInput, createNameInput } from './elements/createInputs';
import { createMainContainer } from './elements/createMainContainer';
import { createUpdateBtn } from './elements/createUpdateBTn';
import { topRow } from './elements/topRow';
import { ICar, Paths } from './models/models';
import { ajaxRequest } from './requests/ajaxRequest';

import './styles.scss';

const container = document.querySelector('.main') as HTMLElement;

container.append(topRow);
const firstRow = ChooserRow();
firstRow.append(createNameInput());
firstRow.append(createColorInput());

const chooserRow1 = ChooserRow();
container.append(chooserRow1);
chooserRow1.append(createNameInput());
chooserRow1.append(createColorInput());

const createdBtn = createBtn();
const updateBtn = createUpdateBtn();

chooserRow1.append(createdBtn);

createdBtn.addEventListener('click', createHandler);

updateBtn.addEventListener('click', (evt) => {
  let id = 1;
  createHandler(evt, id)
});

const chooserRow2 = ChooserRow();
container.append(chooserRow2);
chooserRow2.append(createNameInput());
chooserRow2.append(createColorInput());
chooserRow2.append(updateBtn);
const chooserRow3 = ChooserRow()
container.append(chooserRow3);

chooserRow3.append(createRaceBtn());
chooserRow3.append(createResetBtn());

const generateBtn = createGenerateBtn()
chooserRow3.append(generateBtn);

generateBtn.addEventListener('click', createCars);

const mainContainer = createMainContainer();
container.append(mainContainer);


const cars = async () => await ajaxRequest('GET', Paths.garage)
  .then((res:ICar[]) => {
    createRaceContainer(res, 1, mainContainer)
});
cars();






