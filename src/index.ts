import { toGarageBtn, toWinnerBtn } from './elements/garageRows/createBtn';
import { topRow } from './elements/topRow';
import { PageNames } from './models/models';
import { renderGaragePage } from './pages/renderGrage';
import { renderWinnersPage } from './pages/renderWinners';
import { stateElt } from './store';

import './styles.scss';
import { clearString } from './utilities/utilities';

const container = document.querySelector('.main') as HTMLElement;
let currentPage = stateElt.activePage;
console.log(stateElt);

const toGarage = toGarageBtn(currentPage);
const toWinners = toWinnerBtn(currentPage);
container.before(topRow);
topRow.append(toGarage);
topRow.append(toWinners);

toGarage.addEventListener('click', (evt) => {
  if ((evt.target as HTMLButtonElement)!.disabled === true) return;
  container.innerHTML = '';
  currentPage = clearString(PageNames.garage);
  stateElt.activePage = clearString(PageNames.garage);
  (toGarage as HTMLButtonElement).disabled = true;
  (toWinners as HTMLButtonElement).disabled = false;
  renderGaragePage(stateElt.activePageNumber);
});

toWinners.addEventListener('click', (evt) => {
  if ((evt.target as HTMLButtonElement)!.disabled === true) return;
  container.innerHTML = '';
  stateElt.activePage = clearString(PageNames.winners);
  currentPage = clearString(PageNames.winners);
  (toGarage as HTMLButtonElement).disabled = false;
  (toWinners as HTMLButtonElement).disabled = false;
  renderWinnersPage(stateElt.winnersActivePageNumber, 'sorting', container);
});



if (currentPage === 'garage') {
  renderGaragePage(stateElt.activePageNumber);
} else {
  renderWinnersPage(stateElt.winnersActivePageNumber, 'sorting', container);
}

