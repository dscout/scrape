var Promise = require('bluebird');
var request = require('request-promise');

var constants = require('./constants');

var BASE_URL = 'https://itunes.apple.com/lookup';
var APP_ID_PATTERN = /\/id(\d+)/;

function parseFields(responseBody) {
  var result = responseBody.results[0];

  return {
    app_type:    constants.ios,
    company:     result.sellerName,
    name:        result.trackName,
    icon:        result.artworkUrl60,
    price:       String(result.price),
    free:        result.price === 0,
    rating:      parseFloat(result.averageUserRating).toFixed(1),
    version:     result.version,
    description: result.description,
    thumbnails:  result.screenshotUrls
  };
}

module.exports = function appStore(url) {
  var appId = APP_ID_PATTERN.exec(url)[1];

  return new Promise(function(resolve, reject) {
    request({ uri: BASE_URL, qs: { id: appId }, json: true })
      .then(parseFields)
      .then(resolve)
      .catch(reject);
  });
};
