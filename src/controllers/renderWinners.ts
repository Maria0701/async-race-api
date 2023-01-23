import { AjaxActions, ICar, IWinners, Paths } from '../models/models';
import { ajaxRequestAll } from '../requests/ajaxRequest';
import { generateQueryString } from '../utilities/utilities';
import { createWinnersView } from '../elements/winners/winnersPage';

// type IPromise = [IWinners[], ICar[]];

export const getWinners = async (
  pageNumber: number, 
  sort: string, 
  order: string,
) => ajaxRequestAll(AjaxActions.get, 
  [
    `${Paths.winners}${generateQueryString({
      // _page: `${pageNumber}`,
      // _limit: `${winnersPerPage}`,
      _sort: `${sort}`,
      _order: `${order}`,
    })}`, 
    `${Paths.garage}`,
  ])
  .then((res) => {  
    const winners = res[0] as IWinners[];
    const cars = res[1] as ICar[];
    console.log(winners, cars);
    const mainContainer = document.querySelector('.main-container') as HTMLDivElement;
    mainContainer.innerHTML = '';
    createWinnersView(winners, cars, pageNumber, mainContainer);
  });