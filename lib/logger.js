var chalk = require('chalk');
var _ = require('lodash');

function log(message, logLevel) {
    if(logLevel === 'info') {
      info(message);
    } else if (logLevel === 'warning') {
      warning(message);
    } else if(logLevel === 'error') {
      error(message);
    }
    function info(message) {
      console.log(chalk.blue(message));
    }
    function warning(message) {
      console.log(chalk.yellow(message));
    }
    function error(message) {
      console.log(chalk.red(message));
    }
  };



module.exports = log;
