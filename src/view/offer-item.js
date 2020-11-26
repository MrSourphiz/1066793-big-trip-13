function createOfferTemplate(type, price) {
  return `
    <li class="event__offer">
      <span class="event__offer-title">${type}</>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>
  `;
}

function createEmptyOfferTemplate() {
  return `
    <li class="event__offer"></li>
  `;
}

export {
  createOfferTemplate,
  createEmptyOfferTemplate
};
