export const clearString = (str:string):string => str.toLocaleLowerCase().replace(/ /g,'');

export const getRandomArbitrary = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
  