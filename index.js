var appStore = require('./lib/app-store');
var googlePlay = require('./lib/google-play');

var APP_STORE_PATTERN = /itunes\.apple\.com/gi;

exports.handler = function(event, context) {
  var url = event.url,
      promise;

  if (APP_STORE_PATTERN.test(url)) {
    promise = appStore(url);
  } else {
    promise = googlePlay(url);
  }

  promise
    .then(context.succeed)
    .catch(context.fail);
};
