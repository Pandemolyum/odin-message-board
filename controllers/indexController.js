const queries = require("../db/queries.js");

async function getAllMessages(req, res) {
    const messages = await queries.getAllMessages();

    console.log("Messages: ", messages);

    if (messages) {
        res.render("index.ejs", { messages: messages });
    } else {
        res.send("The database has been deleted or is unreachable.");
    }
}

async function createMessageGet(req, res) {
    res.render("form");
}

// VALIDATION
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
    body("name")
        .trim()
        .isAlpha("en-US", { ignore: " " })
        .withMessage("Name must only contain letters and spaces.")
        .isLength({ min: 1, max: 32 })
        .withMessage("Name must be between 1 and 32 characters"),
    body("message")
        .trim()
        .isLength({ min: 1, max: 1024 })
        .withMessage("Message must be between 1 and 1024 characters."),
];

const createMessagePost = [
    validateMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form.ejs", {
                errors: errors.array(),
            });
        }

        const { name, message } = matchedData(req);
        console.log({ name, message });
        await queries.insertMessage(name, message);

        res.redirect("/");
    },
];

async function openMessage(req, res) {
    const id = Number(req.params.id);

    // Input sanitization
    const messageCount = await queries.getMessageCount();
    if (!Number.isInteger(id) || id < 1 || id > messageCount) {
        res.end("This message does not exist. Quit messing around!");
        return;
    }

    // Get message
    const row = await queries.openMessage(req.params.id);

    console.log("Row: ", row);

    res.render("message.ejs", {
        message: row,
    });
}

module.exports = {
    getAllMessages,
    createMessageGet,
    createMessagePost,
    openMessage,
};
