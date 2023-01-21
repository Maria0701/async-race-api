export interface IAttrs {
  [key: string]: string
};

export interface INewElt {
  tag: string,
  className?: string,
  attrs?: IAttrs,
  text?: string
};

export interface ICar {
  "name": string,
  "color": string,
  "id"?: number,
}

export enum Paths {
  garage = '/garage',
  winners = '/winners',
};

export enum DETAILED_BTNS  {
  create = 'CREATE',
  update = 'UPDATE',
  race = 'RACE',
  reset ='RESET',
  generate = 'GENERATE CARS',
  select = 'SELECT',
  remove = 'REMOVE',
  toGarage = 'TO GARAGE',
  toWinners = 'TO WINNERS',
  start = 'A',
  stop = 'B',
};

export enum PageNames {
  garage = 'Garage',
  winners = 'Winners',
};

export enum AjaxActions {
  put = 'PUT',
  get = 'GET',
  delete = 'DELETE',
}
