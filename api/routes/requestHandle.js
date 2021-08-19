const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const { prependOnceListener } = require("../models/request");
const Requests = require("../models/request");
const M_Products=require("../models/main_product");
const Delivery=require("../models/delivery");
router.get('/', (req, res) => {
    var get_product=[];
    var count=0;
        Requests.find()
                .exec()
                .then(docs => {
                 for (const x of docs) {
                   if (x.status=="require") {
                       console.log(x.status);
                        M_Products.findOne({"productname":x.productname})
                                  .exec()
                                  .then(data=>{
                                if(data.quantity>=x.quantity) {
                                    count=count+1;
                                   u_count=data.quantity-x.quantity;
                                  M_Products.findOneAndUpdate({"productname":x.productname},{"quantity":u_count},{useFindAndModify: false}).exec().then(
                                 Requests.findOneAndUpdate({"_id":x._id},{"status":"SENT"},{useFindAndModify: false}).exec().then(data=>{
                                const newDeli=new Delivery({
                                    _id:data._id,
                                    productname:data.productname,
                                    quantity:data.quantity

                                });
                                newDeli.save()
                                        .then(error=>console.log(error)
                                        )
                                  } ))
                             
                           }
                           else{
                               get_product=x.productname;
                               console.log("noo stock");
                           }
                        }
                   ,error=>console.log(error) );
                       
                   } else {
                       console.log("here")
                       continue;
                       
                   } 
                     
                 }
    });
});
  router.get('/processed',(req,res)=>{
    Requests.find()
    .exec()
    .then(docs => {
        if (docs.length > 0) {
            res.status(200)
            .json({
                status : "success",
                message: "Requests Details",
                count : docs.length,
                data : docs
            });
        } else {
            res.status(200)
            .json({
                status : "success",
                message: "NO Requests",
                count: 0,
                data : []
            });
        }
    })
    .catch( err => {
        res.status(500)
        .json([
            {
                status: "failure",
                message: "unable to fetch Request detail",
                error: err,
                data: []
            }
        ]);
    });

  });

    module.exports=router; 