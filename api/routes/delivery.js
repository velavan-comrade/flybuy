const express = require("express");
const router = express.Router();
const Requests= require("../models/request");
const  delivery = require("../models/delivery");
const products=require("../models/product");
router.get('/', (req, res) => {
  /*
     var q=url.parse(req.url, true).query;
     console.log(q.branch);
   var query={"branch":q.branch}*/
        delivery.find()
                .exec()
                .then(docs => {
                    console.log(docs);
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

    router.put('/', (req, res) => {
        
      delivery.find()
              .exec()
              .then(data=>{
        for (const x of data) {
            
        Requests.findByIdAndUpdate({"_id":x._id}, {"status": "Delivered"})
                .exec()
                .then(
        products.findOne({"productname":x.productname}).exec().then(
            data=>{
                up_quan=data.quantity+x.quantity;
                products.findOneAndUpdate({"productname":x.productname},{"quantity":up_quan}).exec().then( delivery.findOneAndDelete({"_id":x._id})
                .exec()
                .then(console.log("DELIVERED"))
                )
            }
        )
                )
                }  
    })});
    module.exports=router;