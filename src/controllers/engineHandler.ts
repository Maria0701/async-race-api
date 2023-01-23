import { STOP_START } from '../models/consts';
import { AjaxActions, IEngine, Paths, StringObj } from '../models/models';
import { ajaxRequest } from '../requests/ajaxRequest';
import { generateQueryString } from '../utilities/utilities';
import { correctStateOfAnimation } from './correctStateOfAnimation';

export const engineHandler = async (queryObj: StringObj ) => {
  const queryString = generateQueryString(queryObj);
  let animationStart: number;
  let isPaused = false;
  let left = 0;
  const car = document.querySelector(`[data-car="${queryObj.id}"]`) as HTMLElement;
  const routeLength:number = car.parentElement!.clientWidth;
  const qS = generateQueryString({
    id: `${queryObj.id}`,
    status: STOP_START.drive,
  });

  const engineStart =  await ajaxRequest(AjaxActions.patch, `${Paths.engine}${queryString}`)
    .then(async (res: IEngine) => {
      const time = res.distance / res.velocity;
      const animate = (timestamp:number) => {
        if (!animationStart) {
          animationStart = timestamp;
        }
        const progress = timestamp - animationStart;
        const relativeProgress = progress / time;
        left = routeLength * Math.min(relativeProgress, 1);
        car.style.transform = `translate3d(${left}px, 0, 0)`;
        if (progress < time && !isPaused) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
      return res;
    })
    .then(async () => {
      return ajaxRequest(AjaxActions.patch, `${Paths.engine}${qS}`)
        .then((r) => {
          if (!r.success) {
            isPaused = true;
          } else {
            return [queryObj.id];
          }
        })
        .catch((e) => alert(e));
      })
      .finally(() => {
        correctStateOfAnimation(Number(queryObj.id), left);
      });
  
  return engineStart;
};