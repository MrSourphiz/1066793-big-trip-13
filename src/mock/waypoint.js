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
    time: generateTime()
  };
}

export {
  generateWayPoint
};
