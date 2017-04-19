/**
 * Created by kami on 3/31/17.
 */
var firebase = require('firebase-admin');
var conf = require('./flashlightConfig');
var flashlightHelper = require('./flashlightHelper')

// config to our database
var config = {
    databaseURL: conf.FB_URL,
    credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};

// path to search
var PATH = "https://architects-image-workbench.firebaseio.com/search";

// Creating reference to our database
var config = {
    databaseURL: conf.FB_URL,
    credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};
firebase = firebase.initializeApp(config, "client");
var database = firebase.database();
var queue = database.ref('search');


// search function that listens to search/request and search/response
function search(index, type, searchTerm, callback = defaultCallback) {
    // post to firebase/search/request
    var reqRef = queue.child('request').push({index: index, type: type, query: searchTerm});

    // wait for result by listening to search/response
    queue.child('response/' + reqRef.key).on('value', showResults);

    function showResults(snap) {
        if (!snap.exists()) {
            return;
        } else {
            try {
                JSON.parse(snap.val())
            } catch (err) {
                return;
            }
        }

        // When a value arrives from the database, stop listening
        // and remove the temporary data from the database
        snap.ref.off('value', showResults);
        snap.ref.remove();

        // Parse the JSON snap value into key-value pairs consisting of image IDs and confidence levels
        var jsonObj = JSON.parse(snap.val())
        console.log(snap.val())
        var imageResults = flashlightHelper.getImageIdsAndConfidenceLevels(jsonObj)
        callback(imageResults)
    }

}


// default callback function
function defaultCallback(data) {
    console.log("in callback");
    console.log('got back ' + data.total + ' hits');
    if (data.hits) {
        data.hits.forEach(function (hit) {
            console.log(hit);
        });
    }
}

module.exports = {
    search: search
};