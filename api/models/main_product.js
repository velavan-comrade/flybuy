const mongoose = require("mongoose");

const mainProductsSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    productname: String,
    productPrice: Number,
    productDescription: String,
    category: [{type: String}],
    Brand: String,
    quantity: Number,
    dateCreated: Number
});

module.exports = mongoose.model("mainproducts", mainProductsSchema);