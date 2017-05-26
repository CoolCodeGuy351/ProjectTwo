// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
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


