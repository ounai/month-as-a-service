'use strict';

const Constants = require('../config/Constants');

class UsageController {
  static getUsageString() {
    return Constants.USAGE_STRING;
  }
}

module.exports = UsageController;

