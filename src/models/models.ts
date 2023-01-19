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
  "id": number,
}

export enum Paths {
  garage = '/garage',
  winners = '/winners',
};
