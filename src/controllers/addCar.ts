import { ICar, Paths } from "../models/models"
import { ajaxRequest } from "../requests/ajaxRequest"

export const createCar = ({ name , color, id}: ICar) => {
  let params:string;
  let action: string;

  const carToCreate = JSON.stringify({
    name: name,
    color: color
  });

  if (id) {
    params = `${Paths.garage}/${id}`;
    action = 'PUT';
  } else {
    params = Paths.garage;
    action = 'POST';
  }

  return ajaxRequest(action, params, carToCreate);
}