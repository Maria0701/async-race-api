import { getWinners } from '../controllers/renderWinners';
import { createMainContainer } from '../elements/createMainContainer';

export const renderWinnersPage = (page: number, sorting: string, order: string) => {
  const container = document.querySelector('.main') as HTMLDivElement;
  container.innerHTML = '';

  const mainContainer = createMainContainer();
  container.append(mainContainer);
  getWinners(page, sorting, order);
};