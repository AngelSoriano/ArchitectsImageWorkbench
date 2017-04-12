/**
 * Created by kami on 3/31/17.
 */
var firebase = require('firebase-admin');
var conf = require('./flashlightConfig');
var FlashlightHelper = require('./FlashlightHelper')

// config to our database
var config = {
    databaseURL: conf.FB_URL,
    credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};

// path to search
var PATH = "https://architects-image-workbench.firebaseio.com/search";

// Creating reference to our database
var config = {
  databaseURL: conf.FB_URL ,
  credential: firebase.credential.cert(conf.FB_SERVICEACCOUNT)
};
firebase = firebase.initializeApp(config, "client");
var database = firebase.database();
var queue = database.ref('search');


// search function that listens to search/request and search/response
function search(index, type, searchTerm, callback = defaultCallback) {
    // post to firebase/search/request
    var reqRef = queue.child('request').push({index: index, type: type, query: searchTerm});
    var imageResults = []


// This function pushes a search request into firebase so it can be executed by elastic search
// It will post the response in 'search/response'
    function search(index, type, searchTerm, callback = defaultCallback) {
        // post to firebase/search/request
        // index is 'firebase', type is 'label' or 'image', and query is the search term
        var reqRef = queue.child('request').push({index: index, type: type, query: searchTerm});

        // wait for result by listening to search/response
        queue.child('response/' + reqRef.key).on('value', function fn(snap) {

            // var imageResults = FlashlightHelper.getImageIdsAndConfidenceLevel(JSON.parse(snap.val()))


            var jsonObj = JSON.parse(snap.val())
            for (var key in jsonObj) {
                if (jsonObj.hasOwnProperty(key)) {
                    if (key == "hits") {
                        if (jsonObj[key].total != 0) {
                            var json = jsonObj[key].hits;
                            for (var key in json) {
                                if (json.hasOwnProperty(key)) {

                                    if (json[key]._source.Images == undefined) {
                                    } else {
                                        imageArray = json[key]._source.Images

                                        for (var key in imageArray) {
                                            imageResults[key] = imageArray[key]
                                        }
                                    }

                                }
                            }

                        }
                    }

                }

            }
            console.log("CONTROLLA")
            console.log(imageResults)
            callback(imageResults)
        }).off()

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