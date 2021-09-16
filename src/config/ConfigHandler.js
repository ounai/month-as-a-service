'use strict';

const ConfigDefaults = require('./ConfigDefaults');

class ConfigHandler {
  static get serverPort() {
    return process.env.MAAS_PORT ?? process.env.SERVER_PORT ?? process.env.APP_PORT ?? process.env.PORT ?? ConfigDefaults.DEFAULT_SERVER_PORT;
  }
}

module.exports = ConfigHandler;

