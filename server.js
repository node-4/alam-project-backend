const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const compression = require("compression");
const serverless = require("serverless-http");
const app = express();
const path = require("path");
// Middleware
app.use(compression({ threshold: 500 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


require('./routes/admin.route')(app);
require('./routes/user.route')(app);
require('./routes/static.route')(app);
require('./routes/vendor.route')(app);
// MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://node4:node4@cluster0.m36gc8y.mongodb.net/alam-backend?retryWrites=true&w=majority').then(() => {
    console.log(`Mongodb connected with server: alam-backend`);
});

// Root route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(5004, () => {
    console.log(`Listening on port 5004!`);
});
// Export the handler for Serverless
module.exports = app;
module.exports.handler = serverless(app);
