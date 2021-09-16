'use strict';

const UsageController = require('../../controllers/UsageController');

class IndexRoute {
  #server;

  #handle(req, res) {
    res.end(UsageController.getUsageString());
  }

  constructor(server) {
    this.#server = server;
  }

  initialize() {
    this.#server.initializeRoute('GET', '/', this.#handle.bind(this));

    return this;
  }
}

module.exports = IndexRoute;

