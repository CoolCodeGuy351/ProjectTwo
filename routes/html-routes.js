// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var passport = require('passport')
var apiRoutes = require('./api-routes.js')


// Routes
// =============================================================
module.exports = function(app) {

        // index route loads view.html
        app.get("/", function(req, res) {
            res.render("userAuth", {});
        });

        app.get("/home", function(req, res) {
            res.render("homepage", {});
        });

        app.get("/category/:threeCategories", function(req, res) {
                db.Summary.findAll({
                    where: {
                        category: req.params.threeCategories
                    }
                }).then(function(summary) {
                  apiRoutes.findCountAll(req, res).then(function (data) {
                    res.render("category", {
                        catName: req.params.threeCategories,
                        top4: data,
                        categoryNameData: summary
                    });
                  })
                });
            });
        }
        
       /////////////// Added by Joe for auto0 //////////////////////
app.get('/login',
  function(req, res){
    res.render('login', { env: process.env });
  });

// Perform session logout and redirect to homepage
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  });

/////////////// Added by Joe for auto0 //////////////////////
}

