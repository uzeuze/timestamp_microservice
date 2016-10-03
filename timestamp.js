var moment = require('moment');

module.exports = function(query) {
  var time = moment(query, 'MMMM DD, YYYY', true);
  if (!time.isValid())
    time = moment.unix(query);
  if(!time.isValid()) {
    return {
      "unix": null,
      "natural": null
    };
  } else {
    return {
      "unix": time.format("X"),
      "natural": time.format("MMMM D, YYYY")
    };
  }
};
