var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var uuid = require('node-uuid');
var admin = require('firebase-admin');
var flashlightClient = require('../utility/flashlighClient')

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
const imagesRef = db.ref('/images');
const labelsRef = db.ref('/labels');

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
 *  /images/s3/upload
 *  Uploads the image file to Amazon S3
 *
 */
router.post('/s3/upload', upload.single('imageFile'), (req, res) => {
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
            return res.status(err.statusCode).send(err)
        }
        res.send(data)
    });
});

/**
 * /images/fb/store
 * Stores meta info for uploaded image to Firebase database
 *
 */
router.get('/fb/store', (req, res) => {
    // Grab values passed from client
    const imageId = req.query.imageKey
    const imageTitle = req.query.title
    const imageDescription = req.query.description
    var imageLabels = req.query.labels

    // Upload title and description, given the imageId generated from S3, to Firebase
    // https://architects-image-workbench.firebaseio.com/images/{imageId}
    imagesRef.child(imageId).set({
        title: imageTitle,
        description: imageDescription,
    }, (err) => {
        if (err) {
            console.log(err)
            res.send(error)
            return
        }
    });


    // Add the labels given the same imageId
    // https://architects-image-workbench.firebaseio.com/images/{imageId}/labels
    try {
        imageLabels = imageLabels.toString().toLowerCase()
        const imageLabelsJson = JSON.parse(imageLabels)["labels"]

        for (var i = 0; i < imageLabelsJson.length; i++) {
            var obj = imageLabelsJson[i];

            imagesRef.child(imageId + "/labels/" + obj.name).set(obj.confidence);
            labelsRef.child(obj.name + "/images/" + imageId).set(obj.confidence);
        }

        res.send(200)
        return

    } catch (err) {
        console.log("Error in images.js: " + err)
    }
});

/**
 * /images/s3/delete
 * Stores meta info for uploaded image to Firebase database
 *
 */
router.get('/s3/delete', (req, res, next) => {
    const imageId = req.query.imageKey

    s3.deleteObject({
        Bucket: "aiw-bucket",
        Key: imageId
    }, function (err, data) {
        if (err) {
            console.log(err)
            return res.status(err.statusCode).send(err)
        }
        res.send(data)
    })
})

/**
 * /images/search/
 * Search database for results
 *
 */
router.get('/search', (req, res) => {
    const searchTerm = req.query.searchTerm;

    flashlightClient.search("firebase", "label", searchTerm, function (data) {
        if (data === "") {
        } else {
            res.send(data)
        }
    })

});


module.exports = router;