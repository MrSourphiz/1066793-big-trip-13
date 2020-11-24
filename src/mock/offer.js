const OFFERS = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`];
const MIN_OFFERS_COUNT = 0;
const OFFER_MIN_PRICE = 5;
const OFFER_MAX_PRICE = 100;

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

function getRandomOffer() {
  const randomIndex = getRandomInteger(MIN_OFFERS_COUNT, OFFERS.length - 1);
  return OFFERS[randomIndex];
}

function generateOffer() {
  const randomArrayLength = getRandomInteger(MIN_OFFERS_COUNT, OFFERS.length);

  const offerArray = new Array(randomArrayLength).fill().map(getRandomOffer);
  const uniqueOfferArray = getUniqueArray(offerArray);

  const offerPriceArray = new Array(uniqueOfferArray.length).fill().map(function () {
    return getRandomInteger(OFFER_MIN_PRICE, OFFER_MAX_PRICE);
  });

  return {
    offerType: uniqueOfferArray,
    offerPrice: offerPriceArray
  };
}

export {
  generateOffer
};
