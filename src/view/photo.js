function createPhotoTemplate(photo) {
  return `
    <img class="event__photo" src=${photo} alt="Event photo">
  `;
}

export {
  createPhotoTemplate
};
