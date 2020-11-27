import {generateOffer} from "./offer.js";
import {generatePointDescription} from "./description.js";
import {generateTime} from "./time.js";
import {getRandomInteger} from "../helpers/helpers.js";

const POINT_TYPES = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeng`,
  `Restaurant`
];

const CITIES = [`Amsterdam`, `Geneva`, `Chamonix`, `Paris`, `Lyon`];

const MIN_PRICE = 10;
const MAX_PRICE = 100;

function getRandomInfo(array) {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
}

function generateWayPoint() {
  return {
    pointType: getRandomInfo(POINT_TYPES),
    city: getRandomInfo(CITIES),
    offers: generateOffer(),
    pointInfo: generatePointDescription(),
    time: generateTime(),
    price: getRandomInteger(MIN_PRICE, MAX_PRICE)
  };
}

export {
  generateWayPoint
};
