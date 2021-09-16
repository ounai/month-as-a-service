'use strict';

const CurrentMonthController = require('../../controllers/CurrentMonthController');

class MonthRoute {
  #server;
  #currentMonthController;

  #handle(req, res) {
    const currentMonth = this.#currentMonthController.getCurrentMonth();

    res.json(currentMonth);
  }

  constructor(server) {
    this.#currentMonthController = new CurrentMonthController();
    this.#server = server;
  }

  initialize() {
    this.#server.initializeRoute('GET', '/month', this.#handle.bind(this));

    return this;
  }
}

module.exports = MonthRoute;

