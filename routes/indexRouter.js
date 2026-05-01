const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
    {
        text: "Greetings.",
        user: "Weird Al",
        added: new Date(),
    },
];

// Routing
indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date(),
    }); // req.body contains key-value pairs of data submitted in the request body. Populated by express.urlencoded() or express.json().

    res.redirect("/");
});

indexRouter.get("/messages/:id", (req, res) => {
    res.render("message", {
        message: messages[req.params.id],
        id: req.params.id,
    });
});

module.exports = indexRouter;
