import dayjs from "dayjs";

function reformatDate(date) {
  let day = dayjs(date).format(`MMM D`);

  return day;
}

function getUniqueArray(array) {
  const mySet = new Set(array);

  const uniqeArray = Array.from(mySet);

  return uniqeArray;
}

function createRouteTemplate(array) {
  let dateArray = [];
  let cityArray = [];

  for (let i = 0; i < array.length; i++) {
    let time = array[i].time.startDate;
    let city = array[i].city;

    dateArray.push(time);
    cityArray.push(city);
  }

  for (let j = 0; j < dateArray.length; j++) {
    dateArray[j] = reformatDate(dateArray[j]);
  }

  const uniqeDateArray = getUniqueArray(dateArray);
  const uniqueCityArray = getUniqueArray(cityArray);
  const cityString = uniqueCityArray.join(`-`);

  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${cityString}</h1>

      <p class="trip-info__dates">${uniqeDateArray[0]}&nbsp;&mdash;&nbsp;${uniqeDateArray[uniqeDateArray.length - 1]}</p>
    </div>
  `;
}

export {
  createRouteTemplate
};
