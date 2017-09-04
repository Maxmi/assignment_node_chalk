var chalk = require('chalk');

function log(message, level) {
    if (level === 'info') {
      info(message);
    } else if (level === 'warning') {
      warning(message);
    } else if (level === 'error') {
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
