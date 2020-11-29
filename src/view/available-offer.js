const OFFERS_ID = [`luggage`, `comfort`, `meal`, `seats`, `train`];

function createAvailableOfferTemplate(offer, price) {
  let offerID;
  for (let i = 0; i < OFFERS_ID.length; i++) {
    if (offer.includes(OFFERS_ID[i])) {
      offerID = OFFERS_ID[i];
    }
  }
  return `
    <div class="event__offer-selector">
      <input
        class="event__offer-checkbox  visually-hidden"
        id="event-offer-${offerID}-1"
        type="checkbox"
        name="event-offer-${offerID}"
        checked>
      <label class="event__offer-label" for="event-offer-${offerID}-1">
        <span class="event__offer-title" >${offer}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `;
}

export {
  createAvailableOfferTemplate
};
