const moongose=require("mongoose");

const studentSchema=moongose.Schema({
    _id:moongose.Schema.ObjectId,
    student_id:Number,
   student_name:String,
    address:String,
    maths:String,
    english:String,
    science:Number,
    tamil:Number,
    ss:Number
});

module.exports=moongose.model("student",studentSchema);