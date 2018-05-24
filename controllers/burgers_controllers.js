// var connection	= require('../models/burger.js');
// var path = require('path');

var express = require("express");

//Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
  res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("This is the hbsObject" + hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burgername"
  ], [
    req.body.burgername
  ], function(result) {
    // Send back the ID of the new quote
    console.log("This is the req.body.burger_name" + req.body.burger_name)
    //res.json({ id: result.insertId });
      res.redirect('/burgers');
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var devoured = "id = " + req.params.id;

  console.log("devoured", devoured);

 burger.update({
    //devoured: req.body.devoured
      devoured: true
  }, condition, function(result) {
    res.redirect('/burgers');
    
    // if (result.changedRows == 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
  });
});


// Export routes for server.js to use.
module.exports = router;
