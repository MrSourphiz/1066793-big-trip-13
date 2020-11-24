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

export {
  getRandomInteger,
  getUniqueArray
};
