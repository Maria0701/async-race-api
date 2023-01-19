import { baseUrl } from "../models/consts";
import { ICar, Paths } from "../models/models";


export const getCars = async () => {
    try {
        const response = await fetch(`${baseUrl }${Paths.garage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    } catch(e) {
        console.log(e);
    }
}

const cars = getCars();
console.log(cars);




