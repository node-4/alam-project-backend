const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const compression = require("compression");
const serverless = require("serverless-http");
const app = express();
const path = require("path");
app.use(compression({ threshold: 500 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

const admin = require('./routes/admin.route');
const static = require('./routes/static.route');
const user = require('./routes/user.route');
const vendor = require('./routes/vendor.route');
app.use('/api/v1', admin);
app.use('/api/v1', user);
app.use('/api/v1', vendor);
app.use('/api/v1', static);

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://node4:node4@cluster0.m36gc8y.mongodb.net/alam-backend?retryWrites=true&w=majority').then((data) => {
    console.log(`Mongodb connected with server: alam-backend`);
});
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});

module.exports = { handler: serverless(app) };
