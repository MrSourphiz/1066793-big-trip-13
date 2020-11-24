import {getRandomInteger} from "../helpers/helpers.js";
import dayjs from "dayjs";

const MAX_DAYS_GAP = 7;

function getDate() {
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);

  return dayjs().add(daysGap, `day`).format(`DD/MM/YYYY HH:mm`);
}

function generateTime() {
  let startTime = getDate();
  let endTime = getDate();

  if (endTime < startTime) {
    endTime = startTime;
  }
  return {
    startDate: startTime,
    endDate: endTime
  };
}

export {
  generateTime
};
