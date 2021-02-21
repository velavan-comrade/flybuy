const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const { prependOnceListener } = require("../models/request");
const Requests = require("../models/request");
const Products = require("../models/product");
router.get('/', (req, res) => {
        Requests.find()
                .exec()
                .then(docs => {

                 for (const x of docs) {
                   if (x.status=="require") {
                    Products.findOne({"productname":x.productname})
                    .exec()
                    .then(data=>{
                        
                           if(data.count1>=x.quantity) {
                               u_count=data.count1-x.quantity;
                               Products.findOneAndUpdate({"productname":x.productname},{"count1":u_count},{useFindAndModify: false}).exec().then(data=>console.log(data));
                              Requests.findOneAndUpdate({"productname":x.productname},{status:"SENT"},{useFindAndModify: false}).exec().then(console.log("stock clear"));
                             
                           }
                           else{
                               console.log("noo stock");
                           }
                        }
                   ,error=>console.log(error) );
                       
                   } else {
                       continue;
                       
                   }
                   
                     
                 }
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
        // console.log(global.document)  //         
              
    });
  

    router.put('/', (req, res) => {
        //get details about the hub quantity;
        Requests.find({'quantity':20})
                .exec()
                .then(doc=>res.send(doc));
        Requests.findOneAndUpdate({"productName":req.params.productName},{"quantity":10})
                .exec()
                .then(result => {
                    res.status(200)
                    .json([
                        {
                            reslut:result,
                            status: 'success',
                            message: "product sent"
                        }
                    ]);
                })
                .catch(err => {
                    console.log('erroe: ', err);
                    res.status(500)
                    .json([
                        {
                            status: 'failure',
                            message: "unable to sent  Detail",
                            data : []
                        }
                    ]);
                })
        
    });

    module.exports=router;