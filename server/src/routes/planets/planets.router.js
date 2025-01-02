const express = require("express");

const planetsRouter = express.Router();

const planetController = require("./planets.controller");

planetsRouter.get("/planets", planetController.getAllPlanets);

module.exports = planetsRouter;
