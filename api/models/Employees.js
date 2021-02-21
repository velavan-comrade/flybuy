const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    employeeName: String,
    age: Number,
    qualification: String,
    designation:String ,
    salary: String,
    branch: String,
	datecreated: Number
});

module.exports = mongoose.model("employee", employeeSchema);