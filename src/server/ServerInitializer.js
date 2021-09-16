'use strict';

const Server = require('./Server');

const IndexRoute = require('../api/routes/IndexRoute');
const MonthRoute = require('../api/routes/MonthRoute');

class ServerInitializer {
  #server;

  #initializeRoutes(server) {
    new IndexRoute(server).initialize();
    new MonthRoute(server).initialize();
  }

  constructor(port) {
    this.#server = new Server(port);
  }

  get port() {
    return this.#server.port;
  }

  initialize() {
    if (!(this.#server instanceof Server)) {
      throw new Error('Invalid server!');
    }

    this.#initializeRoutes(this.#server);

    this.#server.listen();

    console.log('Server initialized!');

    return this;
  }
}

module.exports = ServerInitializer;

