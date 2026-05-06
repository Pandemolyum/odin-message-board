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

async function createMessagePost(req, res) {
    const { name, message } = req.body;
    console.log({ name, message });
    await queries.insertMessage(name, message);

    res.redirect("/");
}

async function openMessage(req, res) {
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
