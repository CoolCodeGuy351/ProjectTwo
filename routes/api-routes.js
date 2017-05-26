// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get route for returning summaries of a specific category
  //Done
  app.get("/category/:category", function(req, res) {
    db.Summary.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function() {
      res.redirect('/category');
    });
  });

//NEED TO TEST THIS OUT
  app.get("/category/top12/:category", function(req, res) {
    db.Summary.findAndCountAll({
    include:[{
        model:Category, required: true, attributes: [[db.sequelize.fn('COUNT', sequelize.col('title'), 'count')]]
    }], 
    group: ['title'],
    orderBy: "count DESC",
    limit: 12
     })
.then(function() {
      res.redirect('/category');
    });
  });


  // Get route for retrieving a single title
  //Need to put in object for render as second object
  app.get("/posts/:title", function(req, res) {
    db.Summary.findAll({
      where: {
        title: req.params.title
      }
    })
    .then(function() {
      res.redirect('/category');
    });
  });

  // POST route for saving a new post
  //DONE
  app.post("/post", function(req, res) {
    console.log(req.body);
    db.Summary.create({
      title: req.body.title,
      summary: req.body.summary
    })
.then(function() {
      res.redirect('/category');
    });
  });
  
  // DELETE route for deleting posts
  //DONE
  app.delete("/delete/posts/:id", function(req, res) {
    db.Summary.destroy({
      where: {
        id: req.params.id
      }
    })
.then(function() {
      res.redirect('/home');
    });
  });

  // PUT route for updating posts
  //DONE
  app.put("/posts", function(req, res) {
    db.Summary.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
.then(function() {
      res.redirect('/category');
    });
  });
};
