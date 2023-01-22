import { correctStateOfAnimation } from "./correctStateOfAnimation";

export const resetBtnHandler = () => {
  const raceElts = document.querySelectorAll('[data-row]');
  [...raceElts].forEach((item) => {
    const id = Number((item as HTMLDivElement).dataset.row);
    correctStateOfAnimation(id, 0);
    const carContainer = item.querySelector('.car-container') as HTMLDivElement;
    carContainer.style.transform = `translate3d(0, 0, 0)`;
  })
};
