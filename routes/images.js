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
        subregion: 'us-west-2',
    });

/**
 * Multer config
 * Memory storage keeps file data in buffer
 */
const upload = multer({
    storage: multer.memoryStorage(),
    // File size limitation in bytes
    limits: { fileSize: 52428800 },
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
    s3.putObject({
        Bucket: 'aiw-bucket',
        Key: uuid.v4() + ".jpg", // Generate unique key for each image
        Body: req.file.buffer,
        ACL: 'public-read',
    }, (err) => {
        if (err) {
            console.log(err)
            return res.status(400).send(err);
        }
        res.send('File uploaded to S3');
    })

})

module.exports = router;
