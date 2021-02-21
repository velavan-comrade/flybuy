const express = require("express");
const router = express.Router();

const Requests = require("../models/request");

router.get('/', (req, res) => {
  /*
     var q=url.parse(req.url, true).query;
     console.log(q.branch);
   var query={"branch":q.branch}*/
        Requests.find({"status":"require"})
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

    module.exports=router;