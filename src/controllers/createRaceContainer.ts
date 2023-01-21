import { createCarRow } from "../elements/createCarRow";
import { createH1 } from "../elements/createH1";
import { createPageElt } from "../elements/createPageElt";
import { createRaceBlock } from "../elements/singleCarElts/createRaceContainer";
import { ICar, PageNames } from "../models/models";

export const createRaceContainer = (carsArr:ICar[], page: number, container: HTMLElement) => {

    const raceContainer = createRaceBlock();
    const pageName = `${PageNames.garage} (${carsArr.length})`;

    container.append(createH1(pageName));
    container.append(createPageElt(page));
    container.append(raceContainer);

    carsArr.map(item => raceContainer.append(createCarRow(item)));
}