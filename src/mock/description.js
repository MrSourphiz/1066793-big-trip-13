const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const MIN_DESCRIPTION_COUNT = 0;

const MIN_DESCRIPTION_LENGTH = 1;
const MAX_DESCRIPTION_LENGTH = 5;

const PHOTO_COUNT = 5;

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getUniqueArray(arr) {
  let uniqueArr = [];

  arr.forEach(function (item, i, currentArr) {
    let copyArr = currentArr.slice();
    copyArr.splice(i, 1);

    if (copyArr.indexOf(item) === -1) {
      uniqueArr.push(item);
    }
  });

  return uniqueArr;
}

function getRandomPartOfDescription() {
  const randomIndex = getRandomInteger(MIN_DESCRIPTION_COUNT, DESCRIPTIONS.length - 1);
  return DESCRIPTIONS[randomIndex];
}

function getRandomInfo() {
  const randomArrayLength = getRandomInteger(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH);
  const offerArray = new Array(randomArrayLength).fill().map(getRandomPartOfDescription);
  return getUniqueArray(offerArray).join(``);
}

function generatePhotoLink() {
  return `http://picsum.photos/248/152?r=` + Math.random();
}

function getPhotos() {
  const randomLength = getRandomInteger(1, PHOTO_COUNT);
  const photoArray = new Array(randomLength).fill().map(generatePhotoLink);
  return photoArray;
}

function generatePointDescription() {
  return {
    description: getRandomInfo(),
    photos: getPhotos()
  };
}

export {
  generatePointDescription
};