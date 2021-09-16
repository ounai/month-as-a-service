'use strict';

const CurrentDateInterface = require('../../domain/CurrentDateInterface');

class MonthRoute {
  #server;
  #currentDateInterface;

  #handle(req, res) {
    const currentMonth = this.#currentDateInterface.getMonth();

    res.json(currentMonth);
  }

  constructor(server) {
    this.#currentDateInterface = new CurrentDateInterface();
    this.#server = server;
  }

  initialize() {
    this.#server.initializeRoute('GET', '/month', this.#handle.bind(this));

    return this;
  }
}

module.exports = MonthRoute;

