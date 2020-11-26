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
import {createOfferTemplate} from "./view/offer-item.js";
import {createEmptyOfferTemplate} from "./view/offer-item.js";
import {generateWayPoint} from "./mock/waypoint.js";

const TRIP_EVENT_COUNT = 17;
const wayPointArray = new Array(TRIP_EVENT_COUNT).fill().map(generateWayPoint);

function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
}

const tripMain = document.querySelector('.trip-main');
render(tripMain, createInfoTemplate(), 'afterbegin');

const tripInfo = tripMain.querySelector('.trip-info');
render(tripInfo, createRouteTemplate(), 'beforeend');
render(tripInfo, createCostTemplate(), 'beforeend');

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
for (let i = 0; i < offerList.length; i++) {
  if (wayPointArray[i].offers.offerType.length === 0) {
    render(offerList[i], createEmptyOfferTemplate(), 'beforeend');
  } else {
    for (let j = 0; j < wayPointArray[i].offers.offerType.length; j++) {
      render(offerList[i], createOfferTemplate(wayPointArray[i].offers.offerType[j], wayPointArray[i].offers.offerPrice[j]), 'beforeend');
    }
  }
}

const tripEventsItems = tripEventsList.querySelectorAll('.trip-events__item');
render(tripEventsItems[0], createTemplateForEditPoint(), 'afterend');

render(tripEventsList, createTemplateForAddNewPoint(), 'afterbegin');

