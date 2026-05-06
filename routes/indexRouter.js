const { Router } = require("express");
const indexController = require("../controllers/indexController.js");

const indexRouter = Router();

// Routing
indexRouter.get("/", indexController.getAllMessages);
indexRouter.get("/new", indexController.createMessageGet);
indexRouter.post("/new", indexController.createMessagePost);
indexRouter.get("/messages/:id", indexController.openMessage);

module.exports = indexRouter;
