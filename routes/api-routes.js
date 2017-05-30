// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
//                  FUNCTIONS
// =============================================================
module.exports = {
    findCountAll: function(req, res, next) {
        return db.Summary.findAndCountAll({
            include: [{
                model: Category,
                required: true,
                attributes: [
                    [db.sequelize.fn('COUNT', sequelize.col('title'), 'count')]
                ]
            }],
            group: ['title'],
            orderBy: "count DESC",
            limit: 4
        })
    },
    search: function() {
        return db.Summary.findAll({
                where: {
                    title: req.body.search
                }
            })
            .then(function() {
                res.redirect('/category');
            });

    }

    // =============================================================
    //                  ROUTES
    // =============================================================
}
module.exports = function(app) {

        // Get route for returning summaries of a specific category
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

        // NEED TO TEST THIS OUT
        app.get("/category/top12/:category", function(req, res) {
            db.Summary.findAndCountAll({
                    include: [{
                        model: Category,
                        required: true,
                        attributes: [
                            [db.sequelize.fn('COUNT', sequelize.col('title'), 'count')]
                        ]
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
        app.get("/search", function(req, res) {
            db.Summary.findAll({
                    where: {
                        title: req.body.search
                    }
                })
                .then(function() {
                    res.redirect('/category');
                });
        });
        // POST route for saving a new post
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
        app.put("/posts", function(req, res) {
            db.Summary.update(req.body, {
                    where: {
                        id: req.body.id
                    }
                })
                .then(function() {
                    res.redirect('/category');
                });
        });


        // =============================================================
        //                  LOGIN
        // =============================================================

        // on sign in. going to have to create a link from the login that links to the homepage on the submit click
        // make an if/else statement to send the user an error message or page if they mess up on the sign in.
        app.get('/loginPage', function(req, res) {
                    db.Author.findOne({
                        where: {
                            username: req.body.username,
                            password: req.body.password
                        }.then(function() {
                            res.render("homepage", {});
                        })
                    });
                }

                app.post('/loginPage', function(req, res) {
                        db.Author.create({
                                username: req.body.username,
                                password: req.body.password
                            }.then(function() {
                                res.render("homepage", {});
                            })
                        });
                }


















                //on submit button

                // var syllables = [],
                // var syllableCount = 0
                // for (var i = 0; i < syllables.length; i++) {
                // var queryURL = "https://wordsapiv1.p.mashape.com/words/" + syllables[i] + "/syllables";
                // $.ajax({
                //   url: queryURL,
                //   method: "GET"
                //   }).done(function (syllables) {
                //     console.log(syllables.syllables.count)
                //     syllableCount += syllables.syllables.count
                //   })

                //   if (syllableCount === 14) {
                //      db.Summary.create({
                //               title: req.body.title,
                //               summary: req.body.summary
                //           })
                //           .then(function() {
                //               res.redirect('/category');
                //           });
                //   } else {
                // console.log("This isn't 14 syllables, try again")
                // }

                // }


                // }
