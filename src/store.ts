export interface IAnimations {
  id: number,
  left: number,
}

interface IState {
  activePage: string,
  activePageNumber: number,
  animations: IAnimations[],
  winnersActivePageNumber: number,
  sorting: string,
  order: string,
  createInput: string,
  createColor: string,
  updateName: string,
  updateColor: string,
  updateId: number,
}

export const stateElt:IState = {
  activePage: 'garage',
  activePageNumber: 1,
  animations: [],
  winnersActivePageNumber: 1,
  sorting: 'time',
  order: 'DESC',
  createInput: '',
  createColor: '',
  updateName: '',
  updateColor: '',
  updateId: 0,
};