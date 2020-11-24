import {getRandomInteger} from "../helpers/helpers.js";
import {getUniqueArray} from "../helpers/helpers.js";

const OFFERS = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`];
const MIN_OFFERS_COUNT = 0;
const OFFER_MIN_PRICE = 5;
const OFFER_MAX_PRICE = 100;

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
