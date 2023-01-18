import { INewElt } from '../models/models';

export const createNewElement = ({ tag, className, attrs, text }: INewElt) => {
  const newElt = document.createElement(tag);
  if (className) newElt.classList.add(className);
  console.log(attrs);
  if (attrs && Object.keys(attrs).length !== 0) {
    Object.entries(attrs).forEach(([key, value]) => {
      newElt.setAttribute(key, value);
    });
  }
  if (text) {
    newElt.innerText = text;
  }

  return newElt;
};
