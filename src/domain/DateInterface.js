'use strict';

class DateInterface {
  #date;

  constructor(date) {
    this.#date = date;
  }

  getMonth() {
    return this.#date.getMonth() + 1;
  }
}

module.exports = DateInterface;

