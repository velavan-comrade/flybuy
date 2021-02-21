const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    productName: String,
    productPrice: Number,
    productDescription: String,
    category: [{type: String}],
    Brand: String,
    count1: Number,
    dateCreated: Number
});

module.exports = mongoose.model("products", productSchema);