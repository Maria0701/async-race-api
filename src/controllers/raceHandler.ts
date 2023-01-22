import { STOP_START } from "../models/consts";
import { engineHandler } from "./engineHandler";

export const raceHandler = async (evt: Event) => {
  const btn = evt.target as HTMLButtonElement;
  if (btn.disabled === true) return;
  btn.disabled = true;

  const raceElts = document.querySelectorAll('[data-row]');
  const items = [...raceElts].map((item) => {
    item.querySelectorAll('button').forEach((it) => {
        it.disabled = true;
    });
    return (item as HTMLElement).dataset.row;
  });

  const startEngines = () => items.map(item => engineHandler({id: item!, status: STOP_START.a}));

  const results =  await Promise.allSettled([startEngines()]).then(results => {
    results.forEach((result) => {
        if (result.status == 'fulfilled') {
            console.log(result.value);
        }
    });
  })
  .catch((e) => console.log(e))
  .finally(() => {
    btn.disabled = false;
    [...raceElts].forEach((item) => {
      item.querySelectorAll('button').forEach((it) => {
        it.disabled = false;
      });
    });
  });

  return results;
  
} 