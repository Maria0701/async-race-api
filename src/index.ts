import { ChooserRow } from './elements/chooserRow';
import { createBtn, createGenerateBtn, createRaceBtn, createResetBtn, updateBtn } from './elements/createBtn';
import { createCarRow } from './elements/createCarRow';
import { createNewElement } from './elements/createElt';
import { createColorInput, createNameInput } from './elements/createInputs';
import { topRow } from './elements/topRow';
import { ICar } from './models/models';
import { getCars } from './requests/carsRequest';

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
chooserRow1.append(createBtn());


const chooserRow2 = ChooserRow();
container.append(chooserRow2);
chooserRow2.append(createNameInput());
chooserRow2.append(createColorInput());
chooserRow2.append(updateBtn());


const chooserRow3 = ChooserRow()
container.append(chooserRow3);
chooserRow3.append(createRaceBtn());
chooserRow3.append(createResetBtn());
chooserRow3.append(createGenerateBtn());


const createH1 = (num: number) => createNewElement({
  tag: 'h1',
  text: `Garage (${num})`,
  className: 'h1'
});

const createPageElt = (pageNumber: number) => createNewElement({
  tag: 'div',
  className: 'page',
  text: `Page ${pageNumber}`,
});

const cars = async () => await getCars()
  .then((res:ICar[]) => {
    mainContainer.append(createH1(res.length));
    mainContainer.append(createPageElt(1));
    mainContainer.append(raceContainer);
    
    res.map(item => raceContainer.append(createCarRow(item)));
});
cars();

const mainContainer = createNewElement({
    tag: 'div',
    className: 'main-container',
});

container.append(mainContainer);


const raceContainer = createNewElement({
    tag: 'div',
    className: 'main-container__race',
});





