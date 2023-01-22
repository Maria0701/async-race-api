import { StringObj } from "./models";

export const baseUrl = 'http://localhost:3000';
export const numOfCars = 100;
export const startNum = 0;
export const carsPerPage = 7;
export const winnersPerPage = 6;

export const CARS_SUPPLS = [
  'Audi',
  'BMW',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Lada',
  'Mazda',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Renault',
  'Skoda',
  'Toyota',
  'Volkswagen',
];

export const CARS_TYPES = [
  'Micro',
  'Sedan',
  'Hatchback',
  'Universal',
  'Liftback',
  'Coupe',
  'Cabriolet',
  'Roadster',
  'Targa',
  'Limousine',
  'Muscle car',
  'Sport car',
  'Super car',
  'SUV',
  'Crossover',
];

export const STOP_START: StringObj = {
  a: 'started',
  b: 'stopped',
  drive: 'drive',
};

export const WINNERS_HEAD:string[] = [
  'Number',
  'Car',
  'Name',
  'Wins',
  'Best time (seconds)',
];
