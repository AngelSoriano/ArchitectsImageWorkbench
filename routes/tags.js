/**
 * Created by kami, naelin on 4/20/17.
 */
var firebase = require('firebase-admin');
var express = require('express');
var router = express.Router();

/**
 * Firebase reference
 */
const db = firebase.database();
const imagesRef = db.ref('/images');
const labelsRef = db.ref('/labels');

router.get('/retrieve', (req, res) => {
    var imageIds = JSON.parse(req.query.imageIds)

    var confidenceLevelSums = {};
    var counts = {};

    imagesRef.once('value', function (snapshot) {
        for (var i = 0; i < imageIds.length; i++) {
            imagesRef.child(imageIds[i] + '/labels').once('value').then(function (snapshot) {
                var labelsAndConfidenceLevels = snapshot.val()

                for (var label in labelsAndConfidenceLevels) {
                    if (confidenceLevelSums[label] === undefined) {
                        confidenceLevelSums[label] = labelsAndConfidenceLevels[label]
                        counts[label] = 1;
                    } else {
                        confidenceLevelSums[label] = parseFloat(confidenceLevelSums[label]) + labelsAndConfidenceLevels[label]
                        counts[label] = parseFloat(counts[label]) + 1;
                    }
                }
            })
        }
    }).then(function () {
        var averages = {}
        for (var label in confidenceLevelSums) {
            averages[label] = confidenceLevelSums[label] / counts[label];
        }

        // Sort the tags by highest to lowest confidence level average
        var sortedTags = [];
        for (var label in averages) {
            sortedTags.push(label);
        }
        sortedTags.sort(function (a, b) {
            return sortedTags[b] - sortedTags[a]
        });

        res.send(JSON.stringify(sortedTags));
        return;

    })

});

module.exports = router;