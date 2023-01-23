import { DetailedBtns } from '../models/models';
import { stateElt } from '../store';
import { clearString } from '../utilities/utilities';

export const paginationHandler = (
  evt: Event, 
  page: number, 
  callback: (pageNumber: number) => Promise<void>) => {
  const btn = evt.target as HTMLButtonElement;
  let newPage = page;
  if (btn.disabled === true) return;

  if (btn.dataset.name === clearString(DetailedBtns.next)) {
    newPage += 1;
  } else {
    newPage -= 1;
  }
  stateElt.activePageNumber = newPage;
  callback(newPage);
};
