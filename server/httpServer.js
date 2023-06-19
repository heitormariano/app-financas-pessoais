const express = require('express');

class HttpServer {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use('/', express.static('./client'));
  }

  register(metodo, url, callback) {
    this.app[metodo](url, callback);
  }

  listen(porta) {
    this.app.listen(porta);
  }
}

module.exports = HttpServer;
