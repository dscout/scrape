var cheerio = require('cheerio');
var Promise = require('bluebird');
var request = require('request-promise');

var constants = require('./constants');

function parseFields($) {
  var detailsInfo = $('.details-info'),
      company     = detailsInfo.find('[itemprop=author] [itemprop=name]').text().trim(),
      name        = detailsInfo.find('div.document-title').text().trim(),
      price       = detailsInfo.find('[itemprop=price]').attr('content'),
      icon        = detailsInfo.find('img.cover-image').attr('src'),
      version     = $('[itemprop=softwareVersion]').text().trim(),
      description = $('.description div.id-app-orig-desc').text().trim(),
      rating      = $('.score').text().trim(),
      thumbnails  = [];

  $('.thumbnails img').each(function(index, image) {
    thumbnails = thumbnails.concat($(this).attr('src'));
  });

  return {
    app_type:    constants.android,
    company:     company,
    name:        name,
    icon:        icon,
    price:       price,
    free:        price === '0',
    rating:      rating,
    version:     version,
    description: description,
    thumbnails:  thumbnails
  };
}

module.exports = function googlePlay(url) {
  return new Promise(function(resolve, reject) {
    request(url)
      .then(cheerio.load)
      .then(parseFields)
      .then(resolve)
      .catch(reject);
  });
};
