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
        // make call with middleware to grab the string in the api
        db.Summary.findAll({
            order: [["id", "DESC"]],
            where: {
                CategoryId: req.params.threeCategories,
            }, limit: 10
        }).then(function(allData) {
            res.render("category", {
                catName: req.params.threeCategories == 1 ? 'Movies' : req.params.threeCategories == 2 ? 'Books' : 'People',
                data: allData,
                // catTopFour: 
                // categoryNameData: [{ title: "api title string", summary: "api summary string" }]
            });
        })
    });

}