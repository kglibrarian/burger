// Import MySQL connection.
var connection	= require('../config/connection');
// var connection = require("./connection.js");
// var path = require('path');

//* In the `orm.js` file, create the methods that will execute the necessary 
//MySQL commands in the controllers. These are the methods you will need to 
//use in order to retrieve and store data in your database.   
//  * `selectAll()`
    //  * `insertOne()`
    //  * `updateOne()`

// Object Relational Mapper (ORM)
// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
};

module.exports = orm; 



// DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  // app.delete("/api/todos/:id", function(req, res) {
  //   orm.deleteTodo(req.params.id, function(results) {
  //     res.json(results);
  //   });

  


