// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// MySQL DB Connection Information (remember to change this with our specific credentials)
  //Added code for Heroku Jaws DB

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "Karen",
    password: "test827",
    database: "burgers_db"
  });
}; 




  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection; 

