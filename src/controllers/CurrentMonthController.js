'use strict';

const CurrentDateInterface = require('../domain/CurrentDateInterface');

class CurrentMonthController {
  #currentDateInterface;

  constructor() {
    this.#currentDateInterface = new CurrentDateInterface();
  }

  getCurrentMonth() {
    const currentMonth = this.#currentDateInterface.getMonth();

    return currentMonth;
  }
}

module.exports = CurrentMonthController;

