var mysql = require('mysql');

// Create a database connection and export it from this file.

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodQuest',
  multipleStatements: true
});

connection.connect();

module.exports.connection = connection;
