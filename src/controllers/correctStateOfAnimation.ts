import { stateElt } from "../store";

export const correctStateOfAnimation  = (id:number, left: number) => {
    const currentIt = stateElt.animations.find(((it) => it.id === id));
    if (currentIt) {
      currentIt.left = left;
    } else {
      stateElt.animations.push({
        id: id,
        left: left,
      });
    }
}