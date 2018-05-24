// Set up MySQL connection.
var mysql = require("mysql");

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "Karen",
    password: "test827",
    database: "burgers_db"
  });
  
  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection; 

