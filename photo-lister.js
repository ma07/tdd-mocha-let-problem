// photo-lister.js
const PhotoLister = {
  photoToListItem(photo) {
    return [
      '<li><figure><img src="',
      photo.url, '" alt=""/>',
      '<figcaption>',
      photo.title,
      '</figcaption></figure></li>',
    ].join('');
  },
  photoListToHTML(photos) {
    return ['<ul>', photos.map(PhotoLister.photoToListItem).join(''), '</ul>'].join('');
  },
  addPhotosToElement($, selector, list) {
    return $(selector).append(list);
  },
};

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports = PhotoLister;
}

module.exports = PhotoLister;
