
// let FlickrFetcher;
// ***niedziałająca końcówka
// const PhotoLister = require('./photo-lister');

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
  // fetchFlickrData(apiKey, fetch) {
  //   const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
  //            apiKey}&text=pugs&format=json&nojsoncallback=1`;
  //   return fetch(url);
  // },
  fetchFlickrData(apiKey, fetch) {
    let fetch2 = fetch; // added
    if ((!fetch2) && (typeof jQuery !== 'undefined')) {
    //  fetch = jQuery.getJSON.bind(jQuery);
      fetch2 = jQuery.getJSON.bind(jQuery);
    }
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
     apiKey.toString()}&text=pugs&format=json&nojsoncallback=1`;
    // return fetch(url);
    return fetch2(url);
  },
  // fetchFlickrData(apiKey, fetch) {
  //   if ((!fetch) && (typeof jQuery !== 'undefined')) {
  //     fetch = jQuery.getJSON.bind(jQuery);
  //   }
  //   const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
  //    apiKey.toString()}&text=pugs&format=json&nojsoncallback=1`;
  //   return fetch(url);
  // },
  fetchPhotos(apiKey, fetch) {
    return FlickrFetcher.fetchFlickrData(apiKey, fetch)
    .then(data => data.photos.photo.map(FlickrFetcher.transformPhotoObj));
  },
};

// ***Doesn't work***
// FlickrFetcher.fetchPhotos('8060d4cdac3ceb86af470aae29af3a56')
//     .then(PhotoLister.photoListToHTML)
//     .then((photosHTML) => {
//       PhotoLister.addPhotosToElement($, '#mydiv', photosHTML);
//     });
// END***Doesn't work***

// for work with browser too
if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports = FlickrFetcher;
}


// module.exports = FlickrFetcher;
