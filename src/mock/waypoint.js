import dayjs from "dayjs";

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

const OFFERS = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`];

const DESCRIPTIONS = [
  `Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн`,
  `Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн`,
  `Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн`,
  `Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн`,
  `Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн`
];

const PHOTO_COUNT = 5;

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomInfo(array) {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
}

function generatePhotoLink() {
  return `http://picsum.photos/248/152?r=` + Math.random();
}

function getPhotos() {
  const randomLength = getRandomInteger(1, PHOTO_COUNT);
  const photoArray = new Array(randomLength).fill().map(generatePhotoLink);
  return photoArray;
}

function generateWayPointInfo() {
  return {
    description: getRandomInfo(DESCRIPTIONS),
    photos: getPhotos()
  };
}

function generateDate() {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, `day`).toDate();
}

function generateWayPoint() {
  return {
    pointType: getRandomInfo(POINT_TYPES),
    city: getRandomInfo(CITIES),
    offers: getRandomInfo(OFFERS),
    pointInfo: generateWayPointInfo(),
    timeStart: generateDate(),
    timeEnd: generateDate()
  };
}

export {
  generateWayPoint
};
