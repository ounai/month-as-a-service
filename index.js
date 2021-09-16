'use strict';

const Initializer = require('./src/Initializer');

console.log('Initializing...');

new Initializer()
  .instanciateConfigInitializer()
  .initializeConfig()
  .instanciateServerInitializer()
  .initializeServerInitializer();


