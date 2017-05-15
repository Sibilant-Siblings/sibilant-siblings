var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net/foodquest',
  user: 'ba3792a798d949',
  password: '75eb8e04',
  database: 'foodquest',
  multipleStatements: true
});

connection.connect();

module.exports.connection = connection;