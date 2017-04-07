
// let FlickrFetcher;

const FlickrFetcher = {
  photoObjToURL(photoObj) {
    return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}/${photoObj.id}_${
            photoObj.secret}_b.jpg`;
  },
  // transformPhotoObj() {
  //   return {
  //     title: 'Dog goes to desperate measure to avoid walking on a leash',
  //     url: 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg',
  //   };
  // },
  transformPhotoObj(photoObj) {
    return {
      title: photoObj.title,
      url: FlickrFetcher.photoObjToURL(photoObj),
    };
  },
  fetchFlickrData(apiKey, fetch) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
             apiKey}&text=pugs&format=json&nojsoncallback=1`;
    return fetch(url);
  },
  fetchPhotos(apiKey, fetch) {
    return FlickrFetcher.fetchFlickrData(apiKey, fetch)
    .then(data => data.photos.photo.map(FlickrFetcher.transformPhotoObj));
  },
};

module.exports = FlickrFetcher;
