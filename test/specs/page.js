'use strict';

class Page {
  constructor() {}

  open(path) {
    var url = 'http://127.0.0.1:4567/html/' + path;
    browser.url(url);
  }
}

module.exports = Page;
