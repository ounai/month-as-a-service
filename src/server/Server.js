'use strict';

const express = require('express');

class Server {
  #port;
  #app;
  #initialized;

  #onListen() {
    this.initialized = true;

    console.log('Listening on', this.#port);
  }

  #initializeMethodValidated(method, path, handler) {
    switch (method) {
      case 'GET':
        this.#app.get(path, handler);
        break;

      case 'POST':
        this.#app.post(path, handler);
        break;

      case 'PUT':
        this.#app.post(path, handler);
        break;

      case 'DELETE':
        this.#app.delete(path, handler);
        break;

      default:
        throw new Error(`Invalid method ${method}`);
    }
  }

  constructor(port) {
    this.#initialized = false;
    this.#port = port;
    this.#app = express();
  }

  get port() {
    return this.#port;
  }

  initializeRoute(method, path, handler) {
    if (typeof this.#initialized !== 'boolean') {
      throw new Error(`Cannot initialize route, invalid server initialized value ${this.#initialized}`);
    } else if (this.#initialized) {
      throw new Error(`Cannot initialize route, server already initialized!`);
    }

    if (typeof path !== 'string') {
      throw new Error(`Invalid method ${method}`);
    }

    if (typeof path !== 'string') {
      throw new Error(`Invalid path ${path}`);
    }

    if (typeof handler !== 'function') {
      throw new Error(`Invalid handler ${handler}`);
    }

    this.#initializeMethodValidated(method, path, handler);

    return this;
  }

  listen() {
    if (typeof this.#port !== 'number' || isNaN(this.#port)) {
      throw new Error(`Cannot start server, invalid port ${this.#port}`);
    }

    if (typeof this.#initialized !== 'boolean') {
      throw new Error(`Cannot start server, invalid initialized value ${this.#initialized}`);
    } else if (this.#initialized) {
      throw new Error(`Cannot start server, already initialized!`);
    }

    this.#app.listen(this.#port, this.#onListen.bind(this));

    return this;
  }
}

module.exports = Server;

