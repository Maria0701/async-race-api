import { INewElt } from '../models/models';

export const createNewElement = ({ tag, className, attrs, text, disable }: INewElt) => {
  const newElt = document.createElement(tag);
  if (className) newElt.classList.add(className);
  if (attrs && Object.keys(attrs).length !== 0) {
    Object.entries(attrs).forEach(([key, value]) => {
      newElt.setAttribute(key, value);
    });
  }
  if (text) {
    newElt.innerText = text;
  }
  if (disable) (newElt as HTMLButtonElement).disabled = disable;
  return newElt;
};
