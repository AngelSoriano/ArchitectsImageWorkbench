var firebase = require("firebase-admin");
var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});


router.get('/detect', (req, res, next) => {

    // const param = req.query.q; //holds url
    // console.log("PARAMSSSS:", (param))
    var params = {
        Image: {
            S3Object: {
                Bucket: "aiw-bucket",
                Name: "victorian-house.jpg"
            }

        },
        MaxLabels: 300,
        MinConfidence: 0
    };

    rekognition.detectLabels(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            console.log("MESSAGE:", err.message)
            console.log("error again and again")

        }
        else     console.log(data);           // successful response
    });


});

module.exports = router;
