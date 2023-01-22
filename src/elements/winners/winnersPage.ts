
import { paginationHandler } from "../../controllers/paginationHandler";
import { getWinners } from "../../controllers/renderWinners";
import { winnersPerPage } from "../../models/consts";
import { ICar, IWinners, PageNames } from "../../models/models";
import { createNewElement } from "../createElt";
import { createH1 } from "../createH1";
import { createPageElt } from "../createPageElt";
import { createChooserRow } from "../garageRows/chooserRow";
import { createNextPage, createPrevPage } from "../pages";
import { winnersRow } from "./winnersRow";
import { createWinnerTable } from "./winnersTable";

export const createWinnersView = (winners: IWinners[], carsArr: ICar[], page: number, container: HTMLElement) => {
  const pageName = `${PageNames.winners} (${winners.length})`;
  container.append(createH1(pageName));
  container.append(createPageElt(page));

  const table = createNewElement({
    tag: 'table',
    className: 'table'
  });
  const tbody = createWinnerTable();
  table.append(tbody);
  container.append(table);

  const startCar = (page - 1) * winnersPerPage;
  const endCar = carsArr.length > winnersPerPage 
    ? startCar + winnersPerPage
    : carsArr.length;

  [...winners].slice(startCar, endCar)
     .map((item, id) => {
      const car = carsArr.find((i: ICar) => i.id === item.id);
      
      console.log(car);
      tbody.append(winnersRow(id + 1, item, car!))
    });

  const pagesRow = createChooserRow ()
  container.append(pagesRow);
  const prev = createPrevPage(page === 1);
  const next = createNextPage(page === Math.ceil(carsArr.length / winnersPerPage));
  prev.addEventListener('click', (evt) => paginationHandler(evt, page, getWinners ));
  next.addEventListener('click', (evt) => paginationHandler(evt, page, getWinners));
  pagesRow.append(prev);
  pagesRow.append(next);
};
