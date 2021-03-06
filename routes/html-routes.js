// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var lead = require("./api-routes");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("index");
  });
  
  // app.get("/leaderboard", function (req, res) {
  //   res.render("leaderboard");
  // });

  app.get("/gameboard", function (req, res) {
    var defaultImage = "assets/media/back.png";
    var defaultArray = [
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
    ];

    res.render("board", {
      cards: defaultArray,
    });
  });
};
