const pool = require("./pool.js");

async function getAllMessages() {
    try {
        const { rows } = await pool.query("SELECT * FROM messages");
        return rows;
    } catch (err) {
        console.error("This database no longer exists.", err);
        return;
    }
}

async function insertMessage(name, message) {
    await pool.query("INSERT INTO messages (name, message) VALUES ($1, $2)", [
        name,
        message,
    ]);
}

async function openMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [
        id,
    ]);
    return rows[0];
}

// Made this for fun (not planning to implement)
async function updateMessage(id, name, message) {
    await pool.query("UPDATE messages SET name=$1, message=$2 WHERE id=$3", [
        name,
        message,
        id,
    ]);
}

module.exports = {
    getAllMessages,
    insertMessage,
    openMessage,
};
