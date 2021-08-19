const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const m=require("../models/main_product")

router.get('/',function (res) {
        m.find()
            .exec()
            .then(data => {
                console.log(data);
                })
            })
    router.post('/', (req, res) => {

                const newm = new m({
                    _id: new mongoose.Types.ObjectId(),
                  productname:req.body.pn,
                  quantity:req.body.q
                });
            
                newm.save()
                    .then(result => {
                        console.log("Result: ", result);
                        res.status(201)
                        .json([
                            {
                                status : "success",
                                message: "Employee Added",
                                data : [newm]
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
            
                
            });
module.exports=router;