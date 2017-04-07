// flickr-fetcher-spec.js

'use-strict';

const expect = require('chai').expect;

// 1
describe('FlickrFetcher', () => {
  it('should exist', () => {
    const FlickrFetcher = require('./flickr-fetcher.js');
    expect(FlickrFetcher).to.not.be.undefined;
  });
});

// 2
const FlickrFetcher = require('./flickr-fetcher.js');

describe('#photoObjToURL()', () => {
  it('should take a photo object from Flickr and return a string', () => {
    const input = {
      id: '24770505034',
      owner: '97248275@N03',
      secret: '31a9986429',
      server: '1577',
      farm: 2,
      title: '20160229090898',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    };
    const expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
    const actual = FlickrFetcher.photoObjToURL(input);
    expect(actual).to.eql(expected);
  });
});

// 3

describe('#photoObjToURL()', () => {
  it('should take a photo object from Flickr and return a string', () => {
    let input = {
      id: '24770505034',
      owner: '97248275@N03',
      secret: '31a9986429',
      server: '1577',
      farm: 2,
      title: '20160229090898',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    };
    let expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
    let actual = FlickrFetcher.photoObjToURL(input);
    expect(actual).to.eql(expected);

    input = {
      id: '24770504484',
      owner: '97248275@N03',
      secret: '69dd90d5dd',
      server: '1451',
      farm: 2,
      title: '20160229090903',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    };
    expected = 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg';
    actual = FlickrFetcher.photoObjToURL(input);
    expect(actual).to.eql(expected);
  });
});
