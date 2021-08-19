const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
    _id:String,
    productname: String,
    quantity: Number,
    branch: String
});

module.exports = mongoose.model("delivery", deliverySchema);