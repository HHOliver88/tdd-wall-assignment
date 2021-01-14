const Express 			= require("express");
const WallRoutes 		= Express.Router();
const WallController    = require('../controllers/wall.controller');

WallRoutes.get("/", function(req, res, next) {
    new WallController(req, res).index();
});

module.exports = WallRoutes;
