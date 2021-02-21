const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    userName: String,
    password: Number,
});

module.exports = mongoose.model("login", loginSchema);