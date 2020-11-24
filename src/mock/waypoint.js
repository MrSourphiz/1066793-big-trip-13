import {generateOffer} from "./offer.js";
import {generatePointDescription} from "./description.js";
import {generateTime} from "./time.js";

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

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

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
