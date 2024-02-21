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

// Routes
const adminRoutes = require('./routes/admin.route');
const userRoutes = require('./routes/user.route');
const staticRoutes = require('./routes/static.route');
const vendorRoutes = require('./routes/vendor.route');

app.use('/api/v1', adminRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', staticRoutes);
app.use('/api/v1', vendorRoutes);

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

// Export the handler for Serverless
module.exports = app;
module.exports.handler = serverless(app);
