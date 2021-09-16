'use strict';

const ConfigHandler = require('./config/ConfigHandler');

const ConfigInitializer = require('./config/ConfigInitializer');
const ServerInitializer = require('./server/ServerInitializer');

class Initializer {
  #configInitializer;
  #serverInitializer;

  constructor() {
    this.#configInitializer = null;
    this.#serverInitializer = null;
  }

  instanciateConfigInitializer() {
    if (this.#configInitializer !== null && this.#configInitializer instanceof ConfigInitializer) {
      throw new Error('Config initializer has already been instanciated!');
    }

    this.#configInitializer = new ConfigInitializer();

    return this;
  }

  initializeConfig() {
    console.log('Initializing config...');

    if (this.#configInitializer === null) {
      throw new Error('Cannot initialize config initializer, config initializer is null!');
    }

    if (!(this.#configInitializer instanceof ConfigInitializer)) {
      throw new Error('Cannot initialize server initializer, invalid server initializer!');
    }

    this.#configInitializer.initialize();

    return this;
  }

  instanciateServerInitializer() {
    if (this.#serverInitializer !== null && this.#serverInitializer instanceof ServerInitializer) {
      throw new Error('Server initializer has already been instanciated!');
    }

    const serverPort = ConfigHandler.serverPort;

    this.#serverInitializer = new ServerInitializer(serverPort);

    return this;
  }

  initializeServerInitializer() {
    console.log('Initializing server...');

    if (this.#serverInitializer === null) {
      throw new Error('Cannot initialize server initializer, server initializer is null!');
    }

    if (!(this.#serverInitializer instanceof ServerInitializer)) {
      throw new Error('Cannot initialize server initializer, invalid server initializer!');
    }

    this.#serverInitializer.initialize();

    return this;
  }
}

module.exports = Initializer;

