// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection	= require('../config/connection.js');

// Create a new todo
app.post("/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.plan], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new todo
      res.json({ burgername: result.burger_name });
      console.log({ burgername: result.burger_name });
    });
  });