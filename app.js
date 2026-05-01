const express = require("express");
const app = express();
const path = require("node:path");

// Set views folder and engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

// Listen for requests
const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("Listening on port " + PORT + "...");
});
