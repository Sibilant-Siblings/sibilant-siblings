var mysql = require('mysql');

// Create a database connection and export it from this file.

var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'ba3792a798d949',
  password: '75eb8e04',
  database: 'heroku_f5c8b8d3702a6c0',
  multipleStatements: true
});

connection.connect();

module.exports.connection = connection;
