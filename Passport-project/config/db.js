const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/adminPassport");
const db = mongoose.connection;

db.once("open", err => {
    err ? console.log("Error : ", err) : console.log("Database connected");
})

module.exports = db;