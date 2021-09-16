'use strict';

class IndexRoute {
  #server;

  #handle(req, res) {
    res.end('Welcome to the Month as a Service API - try our /month endpoint for endless fun!');
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

