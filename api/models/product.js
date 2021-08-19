const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    productname: String,
    productPrice: Number,
    productDescription: String,
    category: [{type: String}],
    Brand: String,
    quantity: Number,
    dateCreated: Number
});

module.exports = mongoose.model("products", productSchema);