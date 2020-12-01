import {createInfoTemplate} from "./view/info.js";
import {createRouteTemplate} from "./view/route.js";
import {createCostTemplate} from "./view/cost.js";
import {createMenuTemplate} from "./view/menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createListTemplate} from "./view/list.js";
import {createPointTemplate} from "./view/point.js";
import {createTemplateForAddNewPoint} from "./view/add-new-point.js";
import {createTemplateForEditPoint} from "./view/edit-point.js";
import {createPhotoTemplate} from "./view/photo.js";
import {createAvailableOfferTemplate} from "./view/available-offer.js";
import {createOfferTemplate} from "./view/offer-item.js";
import {createEmptyOfferTemplate} from "./view/offer-item.js";
import {generateWayPoint} from "./mock/waypoint.js";

const TRIP_EVENT_COUNT = 17;

function compareElements(prev, next) {
  if (prev.time.startDate < next.time.startDate) {
    return -1;
  }
  if (prev.time.startDate > next.time.startDate) {
    return 1;
  }
  return 0;
}

let wayPointArray = new Array(TRIP_EVENT_COUNT).fill().map(generateWayPoint).sort(compareElements);

function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
}

const tripMain = document.querySelector('.trip-main');
render(tripMain, createInfoTemplate(), 'afterbegin');

const tripInfo = tripMain.querySelector('.trip-info');
render(tripInfo, createRouteTemplate(wayPointArray), 'beforeend');
render(tripInfo, createCostTemplate(wayPointArray), 'beforeend');

const tripControls = tripMain.querySelector('.trip-main__trip-controls');
const tripControlsTitles = tripControls.querySelectorAll('.visually-hidden');
render(tripControlsTitles[0], createMenuTemplate(), 'afterend');
render(tripControlsTitles[1], createFilterTemplate(), 'afterend');

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, createSortTemplate(), 'beforeend');
render(tripEvents, createListTemplate(), 'beforeend');

const tripEventsList = tripEvents.querySelector('.trip-events__list');

for (let i = 0; i < TRIP_EVENT_COUNT; i++) {
  render(tripEventsList, createPointTemplate(wayPointArray[i]), 'beforeend');
}

const offerList = document.querySelectorAll('.event__selected-offers');
offerList.forEach(function (item, index) {
  if (wayPointArray[index].offers.offerType.length === 0) {
    render(item, createEmptyOfferTemplate(), 'beforeend');
  } else {
    for (let j = 0; j < wayPointArray[index].offers.offerType.length; j++) {
      render(item, createOfferTemplate(wayPointArray[index].offers.offerType[j], wayPointArray[index].offers.offerPrice[j]), 'beforeend');
    }
  }
});

const tripEventsItems = tripEventsList.querySelectorAll('.trip-events__item');
const tripEventsRollupButton = tripEventsList.querySelectorAll('.event__rollup-btn');

tripEventsItems.forEach(function (item, index) {
  render(item, createTemplateForEditPoint(wayPointArray[index]), 'afterend');
});

const tripEventsEditItems = tripEventsList.querySelectorAll('.event--edit');

tripEventsEditItems.forEach(function (item) {
  item.classList.add('visually-hidden');
});

function getPhotos(place, index) {
  wayPointArray[index].pointInfo.photos.forEach(function (item) {
    render(place, createPhotoTemplate(item), 'beforeend');
  });
}

function getAvailableOffers(place, index) {
  wayPointArray[index].offers.offerType.forEach(function (item, i) {
    render(place, createAvailableOfferTemplate(item, wayPointArray[index].offers.offerPrice[i]), 'beforeend');
  });
}

tripEventsRollupButton.forEach(function (item, index) {
  const tripPhotos = tripEventsEditItems[index].querySelector('.event__photos-tape');
  const tripAvailableOffers = tripEventsEditItems[index].querySelector('.event__available-offers');

  item.addEventListener('click', function () {
    getPhotos(tripPhotos, index);
    getAvailableOffers(tripAvailableOffers, index);
    tripEventsEditItems[index].classList.remove('visually-hidden');
    item.setAttribute('disabled', 'disabled');
  });
});

render(tripEventsList, createTemplateForAddNewPoint(), 'afterbegin');

