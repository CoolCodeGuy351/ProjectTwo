// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
// var passport = require('passport')
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

        app.get("/category/:catName", function(req, res) {
            res.render("category", {});
        });


        // app.get("/category/:threeCategories", function(req, res) {
        //     db.Summary.findAll({
        //         where: {
        //             categoryId: req.params.threeCategories
        //         }
        //     }).then(function(summary) {
        //         apiRoutes.findCountAll(req, res).then(function(data) {
        //             res.render("category", {
        //                 catName: req.params.threeCategories,
        //                 top4: data,
        //                 categoryNameData: summary
        //             });
        //         })
        //     });
        // });


// How to get the 3 categories to match up with the categoryId in the database, since the column will habe a number and not a value.
        // app.get("/category/:threeCategories", function(req, res) {
        //         if (req.params.threeCategories === "books") {
        //             db.Summary.findAll({
        //                 //         where: {
        //                 //             categoryId: 1
        //                 //         }
        //             })
        //         } else if (req.params.threeCategories === "movies") {
        //             db.Summary.findAll({
        //                 //         where: {
        //                 //             categoryId: 2
        //                 //         }
        //             })
        //         } else if (req.params.threeCategories === "books") {
        //             db.Summary.findAll({
        //                 //         where: {
        //                 //             categoryId: 3
        //                 //         }
        //             })
        //         } else {

        //         }
        //     }



        }
