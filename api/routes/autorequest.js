const express = require("express");
const router = express.Router();
const url=require("url");

const mongoose = require("mongoose");
const { prependOnceListener } = require("../models/request");
const Requests = require("../models/request");
const Product=require("../models/product");

router.get('/', (req, res) => {
    var q=url.parse(req.url, true).query;
     console.log(q.count1);

    Product.find({"count1":{$lt:q.count1}})
        .exec()
        .then(doc => {
            console.log("Found: ", doc);
            if (doc) {
                res.status(200)
                .json(
                [
                    {
                        status: 'success',
                        message: "document retrived",
                        data: doc
                    }
                ]);
            } else {
                res.status(404)
                .json([
                    {
                        status: 'failure',
                        message: "Employee not found!!!",
                        data: []
                    }
                ]);
            }
        })
        .catch(err => {
            console.log("Error: ", err);
            res.status(500)
            .json([
                {
                    status: "failure",
                    message: "unable to find EMPLOYEE",
                    error: err,
                    data: []
                }
            ]);
        });    
});


router.post('/', (req, res) => {
    var title=[];
    console.log(req.body);
    if(req.body==[]){
        res.send("NO DATA");
    }
    else{
    for(let i in req.body)
    {
        title.push({
            _id:new mongoose.Types.ObjectId(),
            productName:req.body[i],
            quantity:20,
            status:"require"
        })
    }
    console.log(title);
    const newRequest=new Requests();
    newRequest.collection.insertMany(title)
            .then(result => {
                console.log("Result: ", result);
                res.status(201)
                .json([
                    {
                        status : "success",
                        message: "REQUEST SENT",
                        data : [newRequest]
                    }
                ]);
            }).catch(err => {
                console.log("Error: ", err);
                res.status(500)
                .json([
                    {
                        status: "failure",
                        message: "unable to add Employee",
                        error: err,
                        data: []
                    }
                ]);
            });
        }
   /* const newRequest = new Requests({
        _id: new mongoose.Types.ObjectId(),
        productName:req.body.productName,
        //productId:Number,
        quantity:req.body.quantity,
        status:"require",
        branch:req.body.branch,
        dateRequested:new Date()
    });

    Request.save()
        .then(result => {
            console.log("Result: ", result);
            res.status(201)
            .json([
                {
                    status : "success",
                    message: "REQUEST SENT",
                    data : [newRequest]
                }
            ]);
        }).catch(err => {
            console.log("Error: ", err);
            res.status(500)
            .json([
                {
                    status: "failure",
                    message: "unable to add Employee",
                    error: err,
                    data: []
                }
            ]);
        });

    */
});

module.exports=router;