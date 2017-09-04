var log = require('./lib/logger');
var _ = require('lodash');
var logs =  require('./data/logs.json');

_.forEach(logs, function(item) {
    log(item.message, item.level);
});
