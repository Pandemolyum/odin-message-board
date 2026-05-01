const express = require("express");
const app = express();
const path = require("node:path");

// Register views folder and engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware & static files
app.use(express.urlencoded({ extended: true }));

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
