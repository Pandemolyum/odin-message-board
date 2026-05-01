const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/:id", (req, res) => {
    res.render("message", { messages: messages });
});

module.exports = messagesRouter;
