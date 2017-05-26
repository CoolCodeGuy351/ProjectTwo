// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("userAuth", {});
  });

  app.get("/category/:threeCategories", function(req, res) {
    res.render("category", {
    	catName: req.params.threeCategories
    });
  });
  // app.get("/category/books", function(req, res) {
  //   res.render("category", {});
  // });
  //need to query the db here to grab data

}



