export interface IAttrs {
  [key: string]: string
}

export interface INewElt {
  tag: string,
  className?: string,
  attrs?: IAttrs,
  text?: string,
  disable?: boolean,
}

export interface ICar {
  name: string,
  color: string,
  id?: number,
}

export enum Paths {
  garage = '/garage',
  winners = '/winners',
  engine = '/engine',
}

export enum DetailedBtns {
  create = 'CREATE',
  update = 'UPDATE',
  race = 'RACE',
  reset = 'RESET',
  generate = 'GENERATE CARS',
  select = 'SELECT',
  remove = 'REMOVE',
  toGarage = 'GARAGE',
  toWinners = 'WINNERS',
  start = 'A',
  stop = 'B',
  next = 'NEXT',
  prev = 'PREV',
}

export enum PageNames {
  garage = 'Garage',
  winners = 'Winners',
}

export enum AjaxActions {
  put = 'PUT',
  get = 'GET',
  delete = 'DELETE',
  patch = 'PATCH',
  post = 'POST',
}

export interface StringObj {
  [key: string]: string 
}

export interface IEngine {
  velocity: number,
  distance: number,
}

export interface IWinners {
  id: number,
  wins: number,
  time: number,
}
