import dayjs from "dayjs";
const MAX_DAYS_GAP = 7;

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

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
