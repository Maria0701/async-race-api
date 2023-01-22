import { createCarRow } from "../elements/createCarRow";
import { createH1 } from "../elements/createH1";
import { createPageElt } from "../elements/createPageElt";
import { createChooserRow } from "../elements/garageRows/chooserRow";
import { createNextPage, createPrevPage } from "../elements/pages";
import { createRaceBlock } from "../elements/singleCarElts/createRaceContainer";
import { carsPerPage } from "../models/consts";
import { ICar, PageNames } from "../models/models";
import { paginationHandler } from "./paginationHandler";
import { cars } from "./renderCars";

export const createRaceContainer = (carsArr:ICar[], page: number, container: HTMLElement) => {

  const raceContainer = createRaceBlock();
  const pageName = `${PageNames.garage} (${carsArr.length})`;

  container.append(createH1(pageName));
  container.append(createPageElt(page));
  container.append(raceContainer);
  const startCar = (page - 1) * carsPerPage;
  const endCar = carsArr.length > carsPerPage 
    ? startCar + carsPerPage
    : carsArr.length;

  [...carsArr].slice(startCar, endCar)
    .map(item => raceContainer.append(createCarRow(item)));

  const pagesRow = createChooserRow()
  container.append(pagesRow);
  const prev = createPrevPage(page === 1);
  const next = createNextPage(page === Math.ceil(carsArr.length / carsPerPage));
  prev.addEventListener('click', (evt) => paginationHandler(evt, page, cars));
  next.addEventListener('click', (evt) => paginationHandler(evt, page, cars));
  pagesRow.append(prev);
  pagesRow.append(next);
};
