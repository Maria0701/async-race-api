import { STOP_START } from "../models/consts";
import { AjaxActions, IEngine, Paths } from "../models/models";
import { ajaxRequest } from "../requests/ajaxRequest";
import { generateQueryString } from "../utilities/utilities";
import { animateMovement } from "./animateMovement";

export const moveCar = (id: number, {velocity, distance}: IEngine) => {
  let isStopped = false;
  const car = document.querySelector(`[data-car="${id}"]`) as HTMLElement;
  const routeLength:number = car.parentElement!.clientWidth;
  if (velocity === 0) isStopped = true;

  const time = distance / velocity;
  const qS = generateQueryString ({
    id: `${id}`,
    status: STOP_START.drive,
  });

  const carMvt = async (qS: string) => await ajaxRequest (AjaxActions.patch, `${Paths.engine}${qS}`)
      .then((r) => {
        if (!r.success) {
          console.log(r)
        }
      })
      .catch((e) => console.log(e));
    carMvt(qS)

  animateMovement(car, time, routeLength , isStopped);
};
