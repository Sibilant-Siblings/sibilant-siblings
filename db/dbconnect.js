var mysql = require('mysql');

// Create a database connection and export it from this file.

var connection = mysql.createConnection({
  host: 'mysql://ba3792a798d949:75eb8e04@us-cdbr-iron-east-03.cleardb.net/heroku_f5c8b8d3702a6c0?reconnect=true',
  user: 'root',
  password: '',
  database: 'foodQuest',
  multipleStatements: true
});

connection.connect();

module.exports.connection = connection;
