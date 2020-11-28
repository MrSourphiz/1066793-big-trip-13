function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

function createCostTemplate(array) {
  let priceArray = [];

  for (let i = 0; i < array.length; i++) {
    const price = array[i].price;

    priceArray.push(price);
  }

  const sum = priceArray.reduce(reducer);

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${sum}</span>
    </p>
  `;
}

export {
  createCostTemplate
};
