'use strict';

const DateInterface = require('./DateInterface');

class CurrentDateInterface extends DateInterface {
  constructor() {
    super(new Date());
  }
}

module.exports = CurrentDateInterface;

