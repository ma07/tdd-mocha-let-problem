// flickr-fetcher.js
var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: function() {
        return 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
    },
    /*The final thing I would like to do is provide an interface
    that takes away the need to pass in jQuery.getJSON
    if jQuery is present as a global variable.*/
    fetchFlickrData: function(apiKey, fetch) {
        if ((!fetch) && (typeof jQuery !== 'undefined')) {
            fetch = jQuery.getJSON.bind(jQuery);
        }
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
                + apiKey.toString() + '&text=pugs&format=json&nojsoncallback=1'
        return fetch(url);
    }
};

//for work with browser too
if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = FlickrFetcher;
}

FlickrFetcher.fetchPhotos('8060d4cdac3ceb86af470aae29af3a56')
    .then(PhotoLister.photoListToHTML)
    .then(function(photosHTML) {
        PhotoLister.addPhotosToElement($, '#mydiv', photosHTML);
    });
module.exports = FlickrFetcher;
