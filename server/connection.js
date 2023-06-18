const mysql = require('mysql2');

class Connection {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Mysql@123',
      database: 'financas_pessoais',
    });
  }

  executarConsulta(instrucao, valores, callback) {
    this.connection.query(instrucao, valores, callback);
  }
}

module.exports = Connection;
