/**
 * Created by kami on 3/1/17.
 */
var firebase = require('firebase-admin');
var express = require('express');
var router = express.Router();


router.get('/retrieve', (req, res) => {
    var out = [];
    // Query database and return the tags

    out = {data:["green", "red", "victorian", "modern", "obtuse"]};
    console.log(out);

    res.send(JSON.stringify(out));

});

module.exports = router;