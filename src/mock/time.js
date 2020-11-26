import {getRandomInteger} from "../helpers/helpers.js";
import dayjs from "dayjs";

const DAY_DURATION = 24;
const HOUR_DURATION = 60;

const MAX_DAYS_GAP = 2;
const MAX_HOURS_GAP = 12;
const MAX_MINUTES_GAP = 45;

function getDate() {
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);
  const hoursGap = getRandomInteger(-MAX_HOURS_GAP, MAX_HOURS_GAP);
  const minutesGap = getRandomInteger(-MAX_MINUTES_GAP, MAX_MINUTES_GAP);

  return dayjs().add(daysGap, `day`).add(hoursGap, `hour`).add(minutesGap, `minute`).format(`YYYY-MM-DD[T]HH:mm`);
}

function getDifference(start, end) {
  let differenceDay = dayjs(end).diff(start, `day`);
  let differenceHour = dayjs(end).diff(start, `hour`);
  let differenceMinute = dayjs(end).diff(start, `minute`);

  let totalHourDiff = differenceHour - differenceDay * DAY_DURATION;
  let totalMinuteDiff = differenceMinute - differenceHour * HOUR_DURATION;

  return {
    diffDay: differenceDay + `D`,
    diffHour: totalHourDiff + `H`,
    diffMinute: totalMinuteDiff + `M`
  };
}

function generateTime() {
  let startTime = getDate();
  let endTime = getDate();

  if (endTime < startTime || endTime === startTime) {
    endTime = getDate();
  }

  return {
    startDate: startTime,
    endDate: endTime,
    difference: getDifference(startTime, endTime)
  };
}

export {
  generateTime
};
