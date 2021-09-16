'use strict';

class ConfigInitializer {
  #dotenvImport;

  constructor() {
    this.#dotenvImport = require('dotenv');
  }

  initialize() {
    if (this.#dotenvImport === undefined || this.#dotenvImport === null) {
      throw new Error('Invalid dotenv import!');
    }

    this.#dotenvImport.config();

    console.log('Config initialized!');

    return this;
  }
}

module.exports = ConfigInitializer;

