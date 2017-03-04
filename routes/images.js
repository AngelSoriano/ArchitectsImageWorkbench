var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var uuid = require('node-uuid');
var ImageUtility;

/**
 * AWS config
 */
const s3 = new AWS.S3();
AWS.config.update(
    {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-west-2',
    });
const rekognition = new AWS.Rekognition();


/**
 * Multer config
 * Memory storage keeps file data in buffer
 */
const upload = multer({
    storage: multer.memoryStorage(),
    // File size limitation in bytes
    limits: {fileSize: 52428800},
});

/**
 *  /images/upload
 *  Uploads the image file to Amazon S3
 *
 *  @todo
 *      1. Generate real file extensions using mimetypes
 *
 */
router.post('/upload', upload.single('imageFile'), (req, res) => {
    var name = uuid.v4() + ".jpg"
    s3.putObject({
        Bucket: 'aiw-bucket',
        Key: name, // Generate unique key for each image
        Body: req.file.buffer,
        ACL: 'public-read',
    }, (err) => {
        if (err) {
            console.log(err)
            return res.status(400).send(err);
        }
        res.send(name);
    })

});

/**
 *  /images/detect
 *  Detects labels from photo from Amazon S3 bucket
 *
 */
router.get('/detect', (req, res, next) => {

    console.log(req.query.imageKey)
    var params = {
        Image: {
            S3Object: {
                Bucket: "aiw-bucket",
                Name: req.query.imageKey
            }
        },
        MaxLabels: 300,
        MinConfidence: 0
    };

    rekognition.detectLabels(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        }
        else console.log(data);
    });
});

module.exports = router;
