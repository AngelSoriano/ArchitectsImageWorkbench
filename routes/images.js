var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var uuid = require('node-uuid');
var admin = require('firebase-admin')
var ImageUtility;

/**
 * AWS config
 */
const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();
AWS.config.update(
    {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-west-2',
    });

/**
 * Firebase config
 */
var serviceAccount = require("../service-account-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://architects-image-workbench.firebaseio.com/",
    storageBucket: "gs://architects-image-workbench.appspot.com/"
});

/**
 * Firebase reference
 */
const db = admin.database();
const imagesRef = db.ref('/Images');

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
 */
router.post('/upload', upload.single('imageFile'), (req, res) => {
    var imageKey = uuid.v4()
    s3.putObject({
        Bucket: 'aiw-bucket',
        Key: imageKey, // Generate unique key for each image
        Body: req.file.buffer,
        ACL: 'public-read',
    }, (err) => {
        if (err) {
            console.log(err)
            return res.status(err.statusCode).send(err);
        }
        res.send(imageKey);
    })

});

/**
 *  /images/detect
 *  Detects labels from photo retrieved from Amazon S3 bucket
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
            console.log(err);
            return res.status(400).send(err)
        }
        console.log(data);
        res.send(data)
    });
});

/**
 * /images/store
 * Stores meta info for uploaded image to Firebase database
 *
 */
router.get('/store', (req, res, next) => {
    // Grab values passed from client
    const imageId = req.query.imageKey
    const imageTitle = req.query.title
    const imageDescription = req.query.description
    const imageLabels = req.query.labels

    // Upload title and description, given the imageId generated from S3, to Firebase
    // https://architects-image-workbench.firebaseio.com/images/{imageId}
    imagesRef.child(imageId).set({
        title: imageTitle,
        description: imageDescription,
    }, (err) => {
        if (err) {
            console.log(err)
            res.send(error)
        }
    });

    // Add the labels given the same imageId
    // https://architects-image-workbench.firebaseio.com/images/{imageId}/labels
    const imageLabelsJson = JSON.parse(imageLabels)["Labels"]
    for (var i = 0; i < imageLabelsJson.length; i++) {
        var obj = imageLabelsJson[i];

        imagesRef.child(imageId + "/labels/" + obj.Name).set(obj.Confidence);
    }

});

module.exports = router;
