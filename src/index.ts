import { ChooserRow } from './elements/chooserRow';
import { createBtn, createGenerateBtn, createRaceBtn, createResetBtn, updateBtn } from './elements/createBtn';
import { createNewElement } from './elements/createElt';
import { createColorInput, createNameInput } from './elements/createInputs';
import { topRow } from './elements/topRow';
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

const mainContainer = createNewElement({
    tag: 'div',
    className: 'main-container',
});

container.append(mainContainer);

const h1 = createNewElement({
    tag: 'h1',
    text: 'Garage (205)',
    className: 'h1'
});

const pageElt = createNewElement({
    tag: 'div',
    className: 'page',
    text: 'Page #1',
});

const raceContainer  = createNewElement({
    tag: 'div',
    className: 'main-container__race',
});

mainContainer.append(h1);
mainContainer.append(pageElt);
mainContainer.append(raceContainer);
